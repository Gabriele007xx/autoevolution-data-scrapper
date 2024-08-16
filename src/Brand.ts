export class Brand {
    productionModels: string; 
    discountinedModels: string;
    logoUrl: string;
    history: string;
    constructor(productionModels: string, discountinedModels: string, logoUrl: string, history: string)
    {
        this.productionModels = productionModels;
        this.discountinedModels = discountinedModels;
        this.logoUrl = logoUrl;
        this.history = history;
    }
}