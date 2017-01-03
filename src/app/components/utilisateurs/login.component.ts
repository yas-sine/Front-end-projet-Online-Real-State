import {Component, Output, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CompteService} from "../../services/compte.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  isLoggedIn:boolean = false;

  constructor(private compteservice:CompteService, private router:Router) {
  }
  onSubmit(form:NgForm) {
    //console.log(form.value);
    this.compteservice.Login(form.value.user, form.value.password).subscribe(data => {
      console.log('data', data);
      if (data.success) {
        this.compteservice.isLoggedIn = true;
        this.compteservice.loggedIn.next(this.compteservice.isLoggedIn);
        this.compteservice._compte = data;
        this.compteservice.Compte.next(this.compteservice._compte);
        //this.router.navigate(['/Immobilier']);

      } else {
        this.isLoggedIn = false;
        console.log(data.msg);
      }
    }, err => console.log(err), () => console.log('Authentication Complete'));
  }
  //

}
