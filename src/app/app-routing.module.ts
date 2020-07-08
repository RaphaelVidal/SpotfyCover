import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponentComponent } from './componentes/login-component/login-component.component';



const routes: Routes = [
  {path:'home',pathMatch:'full' ,component:HomeComponent},
  {path:'',pathMatch:'full' ,component:LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
