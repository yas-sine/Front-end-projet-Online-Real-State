import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './components/header/dropdown.directive';
import { ImmobilierComponent } from './components/immobilier/immobilier.component';
import { DetailComponent } from './components/immobilier/detail.component';
import { PlusdetailComponent } from './components/immobilier/plusdetail.component';
import { ItemComponent } from './components/immobilier/item.component';
import { ImmobiliersService } from "./services/immobiliers.service";
import {routing} from "./app.routing";
import { ListComponent } from './components/immobilier/list.component';
import {CompteService} from "./services/compte.service";
import { LoginComponent } from './components/utilisateurs/login.component';
import { CreerComponent } from './components/utilisateurs/creer.component';
import {Globals} from "./components/utilisateurs/globals";


@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    ImmobilierComponent,
    DetailComponent,
    PlusdetailComponent,
    ItemComponent,
    ListComponent,
    LoginComponent,
    CreerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ImmobiliersService, CompteService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
