const baseUrl = "https://iec-api.revengine.dailymaverick.co.za";
const votesUrl = "/results/votes/national";
const DATA_RERESH_RATE = 30000;

/**
 * Loads data for a specific year.
 *
 * @param {number} year - The year for which to load the data.
 * @returns {Promise<any>} - A promise that resolves to the loaded data.
 */
export async function loadData(year) {
  const url = `${baseUrl}${votesUrl}/${year}`;
  const res = await fetch(url);
  return await res.json();
}