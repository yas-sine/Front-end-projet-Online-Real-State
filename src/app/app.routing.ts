import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ImmobilierComponent} from "./components/immobilier/immobilier.component";
import {DetailComponent} from "./components/immobilier/detail.component";
import {PlusdetailComponent} from "./components/immobilier/plusdetail.component";
import {CreerComponent} from "./components/utilisateurs/creer.component";
import {LoginComponent} from "./components/utilisateurs/login.component";





const APP_ROUTES : Routes = [


  {path: 'Detail', component: DetailComponent},
  {path: 'Immobilier', component: ImmobilierComponent},
  {path: 'Immobilier/:categorie', component: ImmobilierComponent},
  {path: 'PlusDetail/:Id', component: PlusdetailComponent},
  {path: 'Authenticate', component: CreerComponent},
  {path: 'Login', component: LoginComponent},
  {path: '', component: ImmobilierComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
