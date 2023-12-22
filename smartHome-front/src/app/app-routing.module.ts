import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoriesComponent} from "./modules/categories/categories.component";
import {ListAppareilComponent} from "./modules/list-appareil/list-appareil.component";

const routes: Routes = [
  {path: 'category', component: CategoriesComponent},
  {path: 'devices', component: ListAppareilComponent},
  {path: '', component: ListAppareilComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
