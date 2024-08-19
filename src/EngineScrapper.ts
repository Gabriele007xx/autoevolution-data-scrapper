import puppeteer from "puppeteer";
import { Brand } from "./Brand";

export class EngineScrapper {
  constructor() {}
  async getBrandInfo(brand: String) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.autoevolution.com/" + brand + "/");

    // current producted models
    const productionModels = await page.$(".brandinfo .col-green2");
    let numberProductionModels;
    if (productionModels) {
      numberProductionModels = await page.evaluate(
        (element) => element.textContent,
        productionModels
      );
    } else {
      numberProductionModels = "";
    }
    // discountined models
    const discountinedModels = await page.$(".brandinfo .col-red");
    let numberDiscountinedModels;
    if (discountinedModels) {
      numberDiscountinedModels = await page.evaluate(
        (element) => element.textContent,
        discountinedModels
      );
    } else {
      numberDiscountinedModels = "";
    }
    // history
    const history = await page.$(".txt prodhist");
    let text;
    if (history) {
      text = await page.evaluate((element) => element.textContent, history);
    } else {
      text = "";
    }
    // logo
    const image = await page.$(".pic img");
    let url;
    if (image) {
      url = await page.evaluate((element) => element.src, image);
    } else {
      url = "";
    }
    await browser.close();
    return new Brand(
      numberProductionModels!,
      numberDiscountinedModels!,
      url,
      text!
    );
  }
  /**
   * Gets car specs
   * How to build a url:
   * [maker]-[model]-[year of generation].html#aeng_[maker]-[model]-[gen variant]-[engine size in liters, without '.' e.g 19]-[type of injection]-[number of hp]-hp
   * @param url the url
   * @returns a car object
   */
  async getCarDetails(url: String) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.autoevolution.com/cars/" + url);
    console.log("connnected at " + "https://www.autoevolution.com/cars/" + url);
    const AllData = await page.$$(".techdata .right");
    if (AllData.length > 0) {
      const things = [];
      for (const element of AllData) {
        const text = await page.evaluate(
          (el) => el.textContent ? el.textContent : '',
          element
        );
        things.push(text);
      }
      await browser.close();
      return things;
    }
    await browser.close();
    return null;
  }
}
