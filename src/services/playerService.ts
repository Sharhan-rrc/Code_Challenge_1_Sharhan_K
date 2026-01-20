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
