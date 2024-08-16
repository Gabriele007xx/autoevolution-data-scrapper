import { EngineScrapper } from "./src/EngineScrapper";

const engineScrapper = new EngineScrapper;
async function name() {
    const result = await engineScrapper.getCarDetails("seat-leon-2005.html#aeng_seat-leon-2006-19-tdi-90-hp");
}
name();