import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database/connection";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {console.log("Running on port 3000")});