import {Injectable }  from '@angular/core';

@Injectable()
export class Globals{
  constructor(){}
  public nom:string='' ;
  setNom(value:string){this.nom = value;}
  getNom(){return this.nom;}


}
