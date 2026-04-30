import express, { Express } from "express";
import path from "node:path";

const app: Express = express();

app.use(express.static(path.resolve('./public')))

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export default app;
