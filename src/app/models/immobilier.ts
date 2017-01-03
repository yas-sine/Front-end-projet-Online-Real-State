export class Immobilier {
    public Id:string;
    public titre:string;
    public categorie:string;
    public price: number;
    public description:string;
    public imagePath:string;
    public datedepos:Date = new Date();
    public ville: string;

    constructor(){ }
}
