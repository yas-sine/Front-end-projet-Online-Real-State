import {Component, OnInit, Input} from '@angular/core';
import {Immobilier} from "../../models/immobilier";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  immobiliers = [];
  @Input() selectedImmobilier : Immobilier;
  constructor() { }

  ngOnInit() {
  }

}
