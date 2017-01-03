import {Injectable, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Immobilier} from "../models/immobilier";

@Injectable()
export class ImmobiliersService implements OnInit {
  private UrlWebApi = 'http://localhost:3000';
  //mongodb://yassine:yassine@ds139278.mlab.com:39278/dbimmobilier
  //http://data-courses.firebaseio.com/.json
  private http:Http;
  public Immobiliers:Immobilier[];

  constructor(http:Http) {
    this.http = http;
  }

  RecupererImmobiliers():Observable<Immobilier[]> {
    let immobiliers = this.http
      .get((this.UrlWebApi + '/api/immobiliers/'),
        {headers: this.getHeaders()
        })
      .map(response => response.json());
    return immobiliers;
  }
  ChercherParId(id:string):Observable<Immobilier> {

    return this.http .get((this.UrlWebApi + '/api/immobiliers/'+id),
      {headers: this.getHeaders()})
      .map(response => response.json());
  }







  ChercherParCategorie(Categorie:string):Observable<Immobilier[]>
  { return this.http .get((this.UrlWebApi + '/api/immobilier/'+Categorie),
    {headers: this.getHeaders()})
    .map(response => response.json());
  }



  ngOnInit() {
  }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
