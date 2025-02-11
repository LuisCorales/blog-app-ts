/**
 * npx ts-node src/index.ts
 * npm run ts-start
 */

import express from "express";

import { Request, Response, NextFunction } from 'express';

import router from "./routes/index";

// Set app and port
const app = express();
const port = 5500;
app.set('port', process.env.PORT || 5500)

// Use json
app.use(express.json());

// Routes
app.use("/", router);

// If not fitting route was found, send error
app.use((req: Request, res: Response) => {
    return res.sendStatus(404);
});

// Run app
app.listen(app.get('port'), () => {
    console.log("The API is running on http://localhost:" + port);
});