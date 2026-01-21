import { Player, calculateRating, getPlayerById } from "../src/services/playerService";

describe("calculateRating", () => {

  test("calculates rating for a normal player", () => {
    // Arrange
    const player: Player = {
      id: 1,
      name: "Test",
      wins: 10,
      losses: 5,
      totalScore: 1500
    };

    // Act
    const rating = calculateRating(player);

    // Assert
    // (10/15)*100 + (1500/15) = 66.67 + 100 = 166.67
    expect(rating).toBe(166.67);
  });

  test("returns 0 when player has no games", () => {
    // Arrange
    const player: Player = {
      id: 2,
      name: "NoGames",
      wins: 0,
      losses: 0,
      totalScore: 0
    };

    // Act
    const rating = calculateRating(player);

    // Assert
    expect(rating).toBe(0);
  });

});

describe("getPlayerById", () => {

  test("returns a player when ID exists", () => {
    // Arrange
    const id = 1;

    // Act
    const player = getPlayerById(id);

    // Assert
    expect(player).toBeDefined();
    expect(player?.id).toBe(1);
  });

  test("returns undefined when ID does not exist", () => {
    // Arrange
    const id = 999;

    // Act
    const player = getPlayerById(id);

    // Assert
    expect(player).toBeUndefined();
  });

});