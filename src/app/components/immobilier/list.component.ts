import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Immobilier} from "../../models/immobilier";
import {ImmobiliersService} from "../../services/immobiliers.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  immobiliers:Immobilier[] = [];
  
  @Output() immobilierSelected = new EventEmitter<Immobilier>();
  constructor(private route:ActivatedRoute, private immobiliersservice:ImmobiliersService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      let categorie = params['categorie'];
      if (categorie != null) {
        this.immobiliersservice.ChercherParCategorie(categorie).subscribe(p => {
          this.immobiliers = p; }, err => { console.log(err);

        });
      }
      else {
        this.immobiliersservice.RecupererImmobiliers().subscribe(p => {
          this.immobiliers = p; }, err => {
          console.log(err);

        });
      }
    });
  }

  onSelected(immobilier:Immobilier) {
    this.immobilierSelected.emit(immobilier);

  }


}
