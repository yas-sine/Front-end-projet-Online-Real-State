import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';
import {Compte} from "../models/compte";


@Injectable()
export class CompteService {

  private UrlWebApi = 'http://localhost:3000';
  private http:Http;
  isLoggedIn:boolean = false;
  _compte:Compte = new Compte();
  public loggedIn:Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
  public Compte:Subject<Compte> = new BehaviorSubject<Compte>(this._compte);

  constructor(http:Http) {
    this.http = http;
  }

  CreerNouveauCompte(compte:Compte) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post(this.UrlWebApi + '/api/signup', compte, options)
      .map((res:Response) => {
        res.json();
        console.log('res', res);
      }) .subscribe(p => {
      console.log('Compte a été enregistré');
    }, err => {
      console.log('Erreur de sauvegarde', err);
    });
  }
  Login(user:string, password:string) {
    this.isLoggedIn = false;
    if (user && password) {
      var creds = "email=" + user + "&password=" + password;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(this.UrlWebApi + '/api/authenticate', creds, {headers: headers})
        .map(res => res.json());




    }
  }


}
