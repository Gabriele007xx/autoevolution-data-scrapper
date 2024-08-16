import { EngineScrapper } from "./EngineScrapper";

export class AutoevolutionDataScraper {
#scraper: EngineScrapper;
constructor()
{
    this.#scraper = new EngineScrapper();
}
async getBrandInfo(brand: String) {
    return await this.#scraper.getBrandInfo(brand);
}
async getCarDetails(url: String) {
    return await this.#scraper.getCarDetails(url);
}
buildURL(maker: String, model: String, year: number, varYear: number, engineSize: number, injection: number, hp: number)
{
    return `${maker}-${model}-${year}.html#aeng_${maker}-${model}-${varYear}-${engineSize}-${injection}-${hp}-hp`;
}
}


module.exports = { AutoevolutionDataScraper };