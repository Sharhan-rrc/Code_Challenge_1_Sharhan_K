import express, { Express } from "express";
import { getAllPlayers, getPlayerById, getPlayerRating } from "./services/playerService";

const app: Express = express();

// Health check
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

// All players
app.get("/api/v1/players", (req, res) => {
  const players = getAllPlayers();
  res.json({ count: players.length, players });
});

// Single player
app.get("/api/v1/players/:id", (req, res) => {
  const id = Number(req.params.id);
  const player = getPlayerById(id);

  if (!player) {
    return res.status(404).json({ error: "Player not found" });
  }

  res.json(player);
});

// Player rating
app.get("/api/v1/players/:id/rating", (req, res) => {
  const id = Number(req.params.id);
  const rating = getPlayerRating(id);

  if (!rating) {
    return res.status(404).json({ error: "Player not found" });
  }

  res.json(rating);
});

export default app;