import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Immobilier} from "../../models/immobilier";
import {ImmobiliersService} from "../../services/immobiliers.service"


@Component({
  selector: 'app-plusdetail',
  templateUrl: './plusdetail.component.html'
})
export class PlusdetailComponent implements OnInit {
  @Input() selectedImmobilier: Immobilier;
  public Id:string = "";
  public Immobilier:Immobilier = new Immobilier();
  constructor(private route:ActivatedRoute, private immobiliersservice:ImmobiliersService) {
  }

  ngOnInit() {
    this.Id = this.route.snapshot.params['Id'];
    this.immobiliersservice.RecupererImmobiliers().subscribe(i => {
      for (let selectedImmobilier of i) {
        if (selectedImmobilier.Id == this.Id) {
          this.Immobilier = selectedImmobilier;
        }
      }
    }, err => {
      console.log(err);
    });
  }
}
