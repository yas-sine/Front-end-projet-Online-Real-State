import {Component, OnInit} from '@angular/core';
import {Immobilier} from "../../models/immobilier";

@Component({
    selector: 'app-immobilier',
    templateUrl: './immobilier.component.html'
})
export class ImmobilierComponent implements OnInit {
  selectedImmobilier : Immobilier;


    constructor() {
    }

    ngOnInit() {

    }


}
