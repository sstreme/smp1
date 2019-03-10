import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoamingComponent } from "./foaming/foaming.component";
import { IndexComponent  } from "./index/index.component";

const routes: Routes = [
  {path: 'vivier/foaming', component: FoamingComponent},
  {path:'', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
