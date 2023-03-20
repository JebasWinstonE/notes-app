import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PopupComponent } from './components/popup/popup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notes/new', component: PopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
