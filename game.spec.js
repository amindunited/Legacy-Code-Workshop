require('./game.js');
const exp = require('constants');
const fs = require('fs');
const{ readFileSync } = require('fs');


describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
  });

});

describe("Compare to GM", function() {
  it('should match', () => {
    const gmFile = readFileSync('./GM.txt', 'utf8');
    const gameOutputFile = readFileSync('./gameOutput.txt', 'utf8');
    const gm = gmFile.trim().split(/\r?\n/);
    const gameOutput = gameOutputFile.trim().split(/\r?\n/);
    expect(gameOutput.length).toEqual(gm.length);
    for (let i = 0; i < gm.length; i++) {
      expect(gameOutput[i]).toEqual(gm[i]);
    }
  });
});

describe("currentCategory", function() {
  it('should ... have some tests wacked on it', () => {
    expect(currentCategory(0)).toEqual('Pop');
    expect(currentCategory(4)).toEqual('Pop');
    expect(currentCategory(8)).toEqual('Pop');
    expect(currentCategory(1)).toEqual('Science');
    expect(currentCategory(5)).toEqual('Science');
    expect(currentCategory(9)).toEqual('Science');
    expect(currentCategory(2)).toEqual('Sports');
    expect(currentCategory(6)).toEqual('Sports');
    expect(currentCategory(10)).toEqual('Sports');
    expect(currentCategory(3)).toEqual('Rock');
    expect(currentCategory(7)).toEqual('Rock');
    expect(currentCategory(11)).toEqual('Rock');
    expect(currentCategory('minus one')).toEqual('Rock');
  })
});
