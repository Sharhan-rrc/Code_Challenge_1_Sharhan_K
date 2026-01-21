// Interface defining the structure of a Player object
export interface Player {
  id: number;
  name: string;
  wins: number;
  losses: number;
  totalScore: number;
}

// Interface for the rating response object
export interface RatingResponse {
  id: number;
  name: string;
  rating: number;
  gamesPlayed: number;
}

// Sample data representing a list of players that was given in instructions
const players: Player[] = [
  {
    id: 1,
    name: "ShadowStrike",
    wins: 15,
    losses: 5,
    totalScore: 28500
  },
  {
    id: 2,
    name: "NoobMaster",
    wins: 3,
    losses: 12,
    totalScore: 4200
  },
  {
    id: 3,
    name: "ProGamer99",
    wins: 0,
    losses: 0,
    totalScore: 0
  }
];

/**
 * Gets all players from the data store
 * @returns Array of all Player objects
 */
export function getAllPlayers(): Player[] {
  return players;
}

/**
 * Finds a single player by their ID
 * @param id - The player's unique identifier
 * @returns The Player object if found, otherwise undefined
 */
export function getPlayerById(id: number): Player | undefined {
  return players.find(player => player.id === id);
}

/**
 * Calculates a player's performance rating based on their stats
 * Formula: rating = (wins / totalGames) * 100 + (totalScore / totalGames)
 * @param player - The Player object to calculate rating for
 * @returns The calculated rating rounded to 2 decimal places
 */
export function calculateRating(player: Player): number {
  // Calculate total games played
  const totalGames = player.wins + player.losses;
  
  // Edge case: if player has no games, rating is 0
  if (totalGames === 0) {
    return 0;
  }

  // Calculate win rate percentage (0-100)
  const winRate = (player.wins / totalGames) * 100;
  
  // Calculate average score per game
  const averageScore = player.totalScore / totalGames;
  
  // Combine win rate and average score for final rating
  const rating = winRate + averageScore;
  
  // Round to 2 decimal places
  return Math.round(rating * 100) / 100;
}
