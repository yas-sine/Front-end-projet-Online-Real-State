import {Component, OnInit} from '@angular/core';
import {CompteService} from "../../services/compte.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})



export class HeaderComponent implements OnInit {
  username: string = '';



  constructor(private compteservice:CompteService ) {
  }
  search(searchText:string){
    console.log(searchText);
}


  logged() {
     return this.compteservice.isLoggedIn;

    }

  disconnect() {
    //window.localStorage.removeItem(LOCAL_TOKEN_KEY);
   this.compteservice.isLoggedIn = false;
  }


  ngOnInit() {

  }

  }
