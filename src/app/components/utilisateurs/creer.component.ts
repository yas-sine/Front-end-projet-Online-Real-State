import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Compte} from "../../models/compte";
import {CompteService} from "../../services/compte.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html'
})
export class CreerComponent {

  form:FormGroup;

  constructor(fb:FormBuilder, private compteservice:CompteService, private router:Router) {
    this.form = fb.group({
      "nom": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
      "prenom": ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      "email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
      "password": ["", Validators.required]
    });
  }

  save(model:Compte, isValid:boolean) {
    if (isValid) {
      this.compteservice.CreerNouveauCompte(model);
      this.router.navigate(['/Login']);
    }
  }

}
