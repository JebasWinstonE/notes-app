import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PopupComponent } from './components/popup/popup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'note/new',
    component: PopupComponent
  },
  {
    path: 'note/:id',
    component: EditComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
