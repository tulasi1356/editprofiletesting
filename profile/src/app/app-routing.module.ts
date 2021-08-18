import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditingpageComponent } from './editingpage/editingpage.component';
import { HomeComponent } from './home/home.component';
import { Template1Component } from './template1/template1.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'template1',component:Template1Component},
  {path:'editingpage',component:EditingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
