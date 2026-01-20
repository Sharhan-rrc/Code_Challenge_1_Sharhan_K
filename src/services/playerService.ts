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
