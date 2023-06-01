import { frases } from "./frases.js";
import fs from 'fs';

export default async function biscoitoSorte() {
    const biscoitoSorte = await Math.floor(Math.random()*(frases.length));
    console.log(frases[biscoitoSorte]);
}


