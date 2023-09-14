require('./game.js');
const exp = require('constants');
const fs = require('fs');
const{ readFileSync } = require('fs');


// describe("The test environment", function() {
  // it("should pass", function() {
  //   expect(true).toBe(true);
  // });

  // it("should access game", function() {
  //   expect(Game).toBeDefined();
  // });

  // it("should access gameConfig", function() {
  //   expect(gameConfig.users).toBeDefined();
  //   expect(gameConfig.users.length).not.toBe(0);
  // });
// });

describe("Compare to GM", function() {
  it('should match', () => {
    const gmFile = readFileSync('./GM.txt', 'utf8');
    const gameOutputFile = readFileSync('./gameOutput.txt', 'utf8');
    const gm = gmFile.trim().split('\n');
    const gameOutput = gameOutputFile.trim().split('\n');
    expect(gameOutput.length).toEqual(gm.length);
    for (let i = 0; i < gm.length; i++) {
      expect(gameOutput[i]).toEqual(gm[i]);
    }
  });
});
