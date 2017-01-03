import {Component, OnInit, Input} from '@angular/core';
import {Immobilier} from "../../models/immobilier";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() immobilier: Immobilier;
    constructor() { }

  ngOnInit() {
  }

}
