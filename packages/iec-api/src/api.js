
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { getCache, setCache, clearCache } from './cache.js';
import { heatCache } from './heat_cache.js';
import * as ElectionResults from './election_results.js';
import YEARS from "@election-engine/common/years.json" with { type: 'json' };
import path from 'path';
import { fastifyStatic } from '@fastify/static';
import fs from 'fs';

export const server = Fastify({
    logger: false
})

server.register(cors, {
    origin: "*"
});

const dirname = path.resolve(path.dirname(''));
const maps_dir = path.join(dirname, "./", "maps");

if (!fs.existsSync(maps_dir)) {
    throw new Error(`Public directory ${maps_dir} not found`);
}

server.register(fastifyStatic, {
    root: maps_dir,
    prefix: '/maps/',
    maxAge: 604800,
    cacheControl: "public",
    preCompressed: true
})

server.get('/', async (req, res) => {
    res.send({ msg: 'Hello, world!' });
});

server.get("/flush_cache", async (req, res) => {
    const api_key = req.query.api_key;
    if (!api_key || api_key !== process.env.API_KEY) {
        return res.status(401).send({ status: "error", msg: "Unauthorized" });
    }
    console.log("Flushing cache");
    await clearCache();
    await heatCache();
    res.send({ status: "success", msg: "Cache flushed" });
});

server.get("/electoral_types", async (req, res) => {
    let electoralTypes = await getCache("electoral_types");
    if (!electoralTypes) {
        electoralTypes = await ElectionResults.electoralTypes();
        setCache("electoral_types", electoralTypes);
    }
    res.send(electoralTypes);
});

server.get("/electoral_events/:eventTypeID", async (req, res) => {
    const eventTypeID = req.params.eventTypeID;
    let electoralEvents = await getCache(`electoral_events_${eventTypeID}`);
    if (!electoralEvents) {
        electoralEvents = await ElectionResults.electoralEvents(eventTypeID);
        setCache(`electoral_events_${eventTypeID}`, electoralEvents);
    }
    res.send(electoralEvents);
});

server.get("/provinces/:eventID", async (req, res) => {
    const eventID = req.params.eventID;
    let provinces = await getCache(`provinces_${eventID}`);
    if (!provinces) {
        provinces = await ElectionResults.provinces(eventID);
        setCache(`provinces_${eventID}`, provinces);
    }
    res.send(provinces);
})

server.get("/results/:eventID", async (req, res) => {
    const eventID = req.params.eventID;
    let results = await getCache(`results_${eventID}`);
    if (!results) {
        results = await ElectionResults.results(eventID);
        setCache(`results_${eventID}`, results);
    }
    res.send(results);
});

server.get("/seats/:eventID", async (req, res) => {
    const eventID = req.params.eventID;
    let seats = await getCache(`seats_${eventID}`);
    if (!seats) {
        seats = await ElectionResults.seats(eventID);
        setCache(`seats_${eventID}`, seats);
    }
    res.send(seats);
});

const getNationalData = async (year) => {
    const electoral_types = await getCache("electoral_types");
    const national_election = electoral_types.find((et) => et.Description === "National Election");
    if (!national_election) {
        throw ("National Election not found")
    }
    const electoral_events = await getCache(`electoral_events_${national_election.ID}`);
    const national_event = electoral_events.find((ee) => ee.Description.includes(year.toString()));
    if (!national_event) {
        throw (`National Election for year ${year} not found`);
    }
    const provinces = await getCache(`provinces_${national_event.ID}`);
    if (!provinces) {
        throw (`Provinces for National Election for year ${year} not found`);
    }
    return {
        national_event,
        provinces
    };
}

const getProvincialData = async (year) => {
    const electoral_types = await getCache("electoral_types");
    const provincial_election = electoral_types.find((et) => et.Description === "Provincial Election");
    if (!provincial_election) {
        throw ("Provincial Election not found")
    }
    let provincial_events = await getCache(`electoral_events_${provincial_election.ID}`);
    if (!provincial_events) {
        provincial_events = await ElectionResults.electoralEvents(provincial_election.ID);
        await setCache(`electoral_events_${provincial_election.ID}`, provincial_events);
    }
    const provincial_event = provincial_events.find((ee) => ee.Description.includes(year));
    if (!provincial_event) {
        throw (`Provincial Election for year ${year} not found`);
    }
    let provinces = await getCache(`provinces_${provincial_event.ID}`);
    if (!provinces) {
        provinces = await ElectionResults.provinces(provincial_event.ID);
    }
    return { provincial_event, provinces };
}

const getMunicipalities = async (eventID, provinceID) => {
    let municipalities = await getCache(`municipalities_${eventID}_${provinceID}`);
    if (!municipalities) {
        municipalities = await ElectionResults.municipalities(eventID, provinceID);
        await setCache(`municipalities_${eventID}_${provinceID}`, municipalities);
    }
    return municipalities;
}

const parse_year = (year) => {
    if (!year) {
        throw "Year is required"
    }
    const y = parseInt(year);
    if (!y) {
        throw "Year must be an integer"
    }
    if (!YEARS.includes(y)) {
        throw `Year must be one of ${YEARS.join(", ")}`
    }
    return y;
}

server.get("/national/:year", async (req, res) => {
    const year = parse_year(req.params.year);
    const { national_event, provinces } = await getNationalData(year);
    let vote_results = await getCache(`national_votes_${national_event.ID}`);
    if (!vote_results) {
        vote_results = await ElectionResults.results(national_event.ID);
        await setCache(`national_votes_${national_event.ID}`, vote_results);
    }
    let seats = await getCache(`national_seats_${national_event.ID}`);
    if (!seats) {
        seats = await ElectionResults.seats(national_event.ID);
        await setCache(`national_seats_${national_event.ID}`, seats);
    }
    vote_results.RegionalPartyBallotResults = vote_results.PartyBallotResults
        .filter((pr) => pr.PercOfVotes > 0.1)
        .filter((pr) => pr.BallotType === "Regional")
        .map((pr) => {
            const seat = seats.PartyResults.find((sr) => pr.ID === sr.ID);
            let seat_count = 0;
            if (seat) {
                seat_count = seat.Overall;
            }
            return {
                party_id: pr.ID,
                party_name: pr.Name,
                party_abbreviation: pr.PartyAbbr,
                votes: pr.ValidVotes,
                vote_perc: pr.PercOfVotes,
                ballot_type: pr.BallotType,
                independent: pr.bIsIndependent,
                seats: seat_count
            };
        })
        .sort((a, b) => b.votes - a.votes);
    vote_results.PartyBallotResults = vote_results.PartyBallotResults
        .filter((pr) => pr.PercOfVotes > 0.1)
        .filter((pr) => pr.BallotType === "National")
        .map((pr) => {
            const seat = seats.PartyResults.find((sr) => pr.ID === sr.ID);
            let seat_count = 0;
            if (seat) {
                seat_count = seat.Overall;
            }
            return {
                party_id: pr.ID,
                party_name: pr.Name,
                party_abbreviation: pr.PartyAbbr,
                votes: pr.ValidVotes,
                vote_perc: pr.PercOfVotes,
                ballot_type: pr.BallotType,
                independent: pr.bIsIndependent,
                seats: seat_count
            };
        })
        .sort((a, b) => b.votes - a.votes);
    const provincial_results = [];
    for (const province of provinces) {
        const province_id = province.ProvinceID;
        let province_results = await getCache(`national_votes_${national_event.ID}_${province_id}`);
        if (!province_results) {
            province_results = await ElectionResults.votesByProvince(national_event.ID, province_id);
            await setCache(`national_votes_${national_event.ID}_${province_id}`, province_results);
        }
        let seat_results = await getCache(`national_seats_${national_event.ID}_${province_id}`);
        if (!seat_results) {
            seat_results = await ElectionResults.seatsByProvince(national_event.ID, province_id);
            await setCache(`national_seats_${national_event.ID}_${province_id}`, seat_results);
            // return res.status(404).send({ status: "error", msg: `Province Seats for National Election for province ${province} for year ${year} not found` });
        }
        const party_ballot_results = province_results.PartyBallotResults
            .filter((pr) => pr.PercOfVotes > 0.1)
            .filter((pr) => pr.BallotType === "Regional")
            .map((pr) => {
                const seats = seat_results.PartyResults.find((sr) => sr.Name === pr.Name);
                let seat_count = 0;
                if (seats) {
                    seat_count = seats.NumberOfSeats;
                }
                return {
                    party_id: pr.ID,
                    party_name: pr.Name,
                    party_abbreviation: pr.PartyAbbr,
                    votes: pr.ValidVotes,
                    vote_perc: pr.PercOfVotes,
                    ballot_type: pr.BallotType,
                    independent: pr.bIsIndependent,
                    seats: seat_count
                };
            })
            .sort((a, b) => b.Votes - a.Votes);
        provincial_results.push({
            province_id: province_id,
            province_name: province_results.Province,
            registered_voters: province_results.RegisteredVoters,
            spoilt_votes: province_results.SpoiltVotes,
            special_votes: province_results.SpecialVotes,
            percent_voter_turnout: province_results.PercVoterTurnout,
            total_votes_cast: province_results.TotalVotesCast,
            total_valid_votes: province_results.TotalValidVotes,
            vd_count: province_results.VDCount,
            vd_captured: province_results.VDWithResultsCaptured,
            party_ballot_results
        });
    }
    const result = {
        event_id: national_event.ID,
        event_name: national_event.Description,
        registered_voters: vote_results.RegisteredVoters,
        spoilt_votes: vote_results.SpoiltVotes,
        special_votes: vote_results.SpecialVotes,
        total_votes_cast: vote_results.TotalVotesCast,
        total_valid_votes: vote_results.TotalValidVotes,
        vd_count: vote_results.VDCount,
        vd_captured: vote_results.VDWithResultsCaptured,
        party_ballot_results: vote_results.PartyBallotResults,
        regional_party_ballot_results: vote_results.RegionalPartyBallotResults,
        provincial_results
    }
    res.send(result);
})

server.get("/provincial/:year", async (req, res) => {
    const year = parse_year(req.params.year);
    const { provincial_event, provinces } = await getProvincialData(year);
    const result = [];
    for (const province of provinces) {
        const province_id = province.ProvinceID;
        let province_results = await getCache(`provincial_votes_${provincial_event.ID}_${province_id}`);
        if (!province_results) {
            province_results = await ElectionResults.votesByProvince(provincial_event.ID, province_id);
            await setCache(`provincial_votes_${provincial_event.ID}_${province_id}`, province_results);
        }
        let seat_results = await getCache(`provincial_seats_${provincial_event.ID}_${province_id}`);
        if (!seat_results) {
            seat_results = await ElectionResults.seatsByProvince(provincial_event.ID, province_id);
            await setCache(`provincial_seats_${provincial_event.ID}_${province_id}`, seat_results);
        }
        const party_ballot_results = province_results.PartyBallotResults
            .filter((pr) => pr.PercOfVotes > 0.1)
            .map((pr) => {
                return {
                    party_id: pr.ID,
                    party_name: pr.Name,
                    party_abbreviation: pr.PartyAbbr,
                    votes: pr.ValidVotes,
                    vote_perc: pr.PercOfVotes,
                    ballot_type: pr.BallotType,
                    independent: pr.bIsIndependent,
                    seats: seat_results.PartyResults.find((sr) => sr.Name === pr.Name)?.NumberOfSeats || 0
                };
            })
            .sort((a, b) => b.Votes - a.Votes);
        result.push({
            province_id: province_id,
            province_name: province.Province,
            registered_voters: province_results.RegisteredVoters,
            spoilt_votes: province_results.SpoiltVotes,
            special_votes: province_results.SpecialVotes,
            percent_voter_turnout: province_results.PercVoterTurnout,
            total_votes_cast: province_results.TotalVotesCast,
            total_valid_votes: province_results.TotalValidVotes,
            vd_count: province_results.VDCount,
            vd_captured: province_results.VDWithResultsCaptured,
            party_ballot_results
        });
    }
    let registered_voters = 0;
    let spoilt_votes = 0;
    let special_votes = 0;
    let total_votes_cast = 0;
    let total_valid_votes = 0;
    let vd_count = 0;
    let vd_captured = 0;
    for (const province of result) {
        registered_voters += province.registered_voters;
        spoilt_votes += province.spoilt_votes;
        special_votes += province.special_votes;
        total_votes_cast += province.total_votes_cast;
        total_valid_votes += province.total_valid_votes;
        vd_count += province.vd_count;
        vd_captured += province.vd_captured;
    }
    res.send({
        event_id: provincial_event.ID,
        event_name: provincial_event.Description,
        registered_voters,
        spoilt_votes,
        special_votes,
        total_votes_cast,
        total_valid_votes,
        vd_count,
        vd_captured,
        provincial_results: result
    });
})

server.get("/provincial/:year/:province", async (req, res) => {
    const year = parse_year(req.params.year);
    const province = req.params.province;
    const { provincial_event, provinces } = await getProvincialData(year);
    const province_id = provinces.find((p) => p.Province === province).ProvinceID;
    let province_results = await getCache(`provincial_votes_${provincial_event.ID}_${province_id}`);
    if (!province_results) {
        province_results = await ElectionResults.votesByProvince(provincial_event.ID, province_id);
        await setCache(`provincial_votes_${provincial_event.ID}_${province_id}`, province_results);
    }
    let seat_results = await getCache(`provincial_seats_${provincial_event.ID}_${province_id}`);
    if (!seat_results) {
        seat_results = await ElectionResults.seatsByProvince(provincial_event.ID, province_id);
        await setCache(`provincial_seats_${provincial_event.ID}_${province_id}`, seat_results);
    }
    const party_ballot_results = province_results.PartyBallotResults
        .filter((pr) => pr.PercOfVotes > 0.1)
        .map((pr) => {
            return {
                party_id: pr.ID,
                party_name: pr.Name,
                party_abbreviation: pr.PartyAbbr,
                votes: pr.ValidVotes,
                vote_perc: pr.PercOfVotes,
                ballot_type: pr.BallotType,
                independent: pr.bIsIndependent,
                seats: seat_results.PartyResults.find((sr) => sr.Name === pr.Name)?.NumberOfSeats || 0
            };
        })
        .sort((a, b) => b.Votes - a.Votes);
    const municipalities = await getMunicipalities(provincial_event.ID, province_id);
    const municipal_results = [];
    for (let municipality of municipalities) {
        let municipality_results = await getCache(`municipality_votes_${provincial_event.ID}_${province_id}_${municipality.MunicipalityID}`);
        if (!municipality_results) {
            municipality_results = await ElectionResults.votesByMunicipality(provincial_event.ID, province_id, municipality.MunicipalityID);
            await setCache(`municipality_votes_${provincial_event.ID}_${province_id}_${municipality.MunicipalityID}`, municipality_results);
        }
        municipal_results.push({
            municipality_id: municipality.MunicipalityID,
            municipality_name: municipality.Municipality,
            registered_voters: municipality_results.RegisteredVoters,
            spoilt_votes: municipality_results.SpoiltVotes,
            special_votes: municipality_results.SpecialVotes,
            percent_voter_turnout: municipality_results.PercVoterTurnout,
            total_votes_cast: municipality_results.TotalVotesCast,
            total_valid_votes: municipality_results.TotalValidVotes,
            vd_count: municipality_results.VDCount,
            vd_captured: municipality_results.VDWithResultsCaptured,
            party_ballot_results: municipality_results.PartyBallotResults
                .filter((pr) => pr.PercOfVotes > 0.1)
                .map((pr) => {
                    return {
                        party_id: pr.ID,
                        party_name: pr.Name,
                        party_abbreviation: pr.PartyAbbr,
                        votes: pr.ValidVotes,
                        vote_perc: pr.PercOfVotes,
                        ballot_type: pr.BallotType,
                        independent: pr.bIsIndependent,
                        seats: seat_results.PartyResults.find((sr) => sr.Name === pr.Name)?.NumberOfSeats || 0
                    };
                })
                .sort((a, b) => b.Votes - a.Votes)
        });
    }
    const result = {
        event_id: provincial_event.ID,
        event_name: provincial_event.Description,
        province_id: province_id,
        province_name: province_results.Province,
        registered_voters: province_results.RegisteredVoters,
        spoilt_votes: province_results.SpoiltVotes,
        special_votes: province_results.SpecialVotes,
        percent_voter_turnout: province_results.PercVoterTurnout,
        total_votes_cast: province_results.TotalVotesCast,
        total_valid_votes: province_results.TotalValidVotes,
        vd_count: province_results.VDCount,
        vd_captured: province_results.VDWithResultsCaptured,
        party_ballot_results,
        municipal_results
    };
    res.send(result);
});

server.get("/progress/:year", async (req, res) => {
    const year = parse_year(req.params.year);
    const { national_event } = await getNationalData(year);
    let progress = await getCache(`progress_${national_event.ID}`);
    if (!progress) {
        progress = await ElectionResults.progress(national_event.ID);
        await setCache(`progress_${national_event.ID}`, progress);
    }
    res.send(progress);
})
