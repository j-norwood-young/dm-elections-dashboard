// const baseUrl = "http://localhost:9001";
const baseUrl = "https://iec-api.revengine.dailymaverick.co.za";
import national2009 from "../../data/api/2009-national.json";
import national2014 from "../../data/api/2014-national.json";
import national2019 from "../../data/api/2019-national.json";

/**
 * Loads data for a specific election year, type, region, and election.
 * @param {Object} options - The options for loading the data.
 * @param {number} [options.year=2024] - The year of the election.
 * @param {string} [options.election="National Assembly"] - The type of election.
 * @param {string} [options.region="National"] - The region of the election.
 * @returns {Promise<any>} - A promise that resolves with the loaded data.
 */
export async function loadData({ year = 2024, election = "National Assembly", region = "National" }) {
    let url = `${baseUrl}/national/${year}`;
    if (election === "National Assembly") {
        if (year === 2009) return national2009;
        if (year === 2014) return national2014;
        if (year === 2019) return national2019;
        return await load(url);
    }
    if (region === "National") {
        url = `${baseUrl}/provincial/${year}`;
    } else {
        url = `${baseUrl}/provincial/${year}/${region}`;
    }
    return await load(url);
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
        throw new Error(`Failed to load data from ${url}: ${response.status} ${response.statusText}`);
    }
    try {
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to parse data from ${url}`);
    }
}