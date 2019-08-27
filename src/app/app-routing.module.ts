import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'panel/:id',
        component: PanelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
