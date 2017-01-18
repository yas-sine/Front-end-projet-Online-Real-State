import {Component, OnInit} from '@angular/core';
import {CompteService} from "../../services/compte.service";
import {Globals} from '../utilisateurs/globals';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  constructor(private compteservice:CompteService, private globals:Globals) {
  }
  logged() {
     return this.compteservice.isLoggedIn;
        }

  disconnect() {
   this.compteservice.isLoggedIn = false;
  }

  ngOnInit() {
  }

  }
