import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './components/project/project.component'

const routes: Routes = [
  {
    path: '',
    //component: ViewCvComponent,
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path:'my',
    component:ProjectComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
