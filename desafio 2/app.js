import express from "express";
import { frases } from "./frases.js";
import biscoitoSorte from "./mecanicaBiscoito.js";

const app = express();

app.use(express.json())


app.get('/biscoitDaSorte', (req, res) => {
    res.status(200).json(biscoitoSorte())
  })

export default app