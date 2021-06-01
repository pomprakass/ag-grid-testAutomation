import { expect } from "chai";
const axios = require('axios');

describe("Verify API test", () => {
/**
 * Verify valid error
 */
  it("Should correct data", () => {
    const response=axios.get(
    baseURL: 'https://api.football-data.org/v2/teams/12',
    timeout: 1000,
    headers: {'X-Auth-Token': 'e051043b86624518a57a263f9388d198'})
expect(response.status).to.equal(200);
});

/**
 * Verify authorize error
 */
it("Should get authorize error", () => {
    const response=axios.get(
    baseURL: 'https://api.football-data.org/v2/teams/12',
    timeout: 1000,
    headers: {'X-Auth-Token': ''})
expect(response.status).to.equal(403);
});
/**
 * Verify data length
 */
   it("Should correct data", () => {
    const response=axios.get(
    baseURL: 'https://api.football-data.org/v2/teams/12',
    timeout: 1000,
    headers: {'X-Auth-Token': 'e051043b86624518a57a263f9388d198'})
expect(response.data).to.have.lengthOf.at.least(20);
});

});
