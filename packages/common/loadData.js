const baseUrl = "https://iec-api.revengine.dailymaverick.co.za";
const votesUrl = "/results/votes/national";
const seatsUrl = "/results/seats/national";

/**
 * Loads data for a specific year.
 *
 * @param {number} year - The year for which to load the data.
 * @returns {Promise<any>} - A promise that resolves to the loaded data.
 */
export async function loadData({year = 2024, election = "National Assembly", region = "National"}) {
    const url = `${baseUrl}/data/${election}/${region}/${year}`;
    const res = await fetch(url);
    return await res.json();
}