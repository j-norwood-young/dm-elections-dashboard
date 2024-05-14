const baseUrl = "https://iec-api.revengine.dailymaverick.co.za";
const votesUrl = "/results/votes/national";
const seatsUrl = "/results/seats/national";


/**
 * Loads data for a specific election year, type, region, and election.
 * @param {Object} options - The options for loading the data.
 * @param {number} [options.year=2024] - The year of the election.
 * @param {string} [options.election="National Assembly"] - The type of election.
 * @param {string} [options.region="National"] - The region of the election.
 * @param {string} [options.type="votes"] - The type of data to load (votes or seats).
 * @returns {Promise<any>} - A promise that resolves with the loaded data.
 */
export async function loadData({year = 2024, election = "National Assembly", region = "National", type="votes"}) {
    // const url = `${baseUrl}/data/${election}/${region}/${year}`;
    if (type === "votes") {
        const url = `${baseUrl}${votesUrl}/${year}`;
        return await load(url);
    } else if (type === "seats") {
        const url = `${baseUrl}${seatsUrl}/${year}`;
        return await load(url);
    }
}

/**
 * Loads data from the specified URL.
 * @param {string} url - The URL to fetch the data from.
 * @returns {Promise<any>} - A promise that resolves to the parsed JSON data.
 * @throws {Error} - If the data fails to load or parse.
 */
async function load(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load data from ${url}`);
    }
    try {
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to parse data from ${url}`);
    }
}