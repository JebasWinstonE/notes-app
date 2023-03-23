import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { PopupComponent } from './components/popup/popup.component';
import { ShrinkPipe } from './pipes/shrink.pipe';
import { FactsComponent } from './components/facts/facts.component';
import { EditComponent } from './components/edit/edit.component';
import ForDirective from './directives/for.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotesComponent,
    NoteComponent,
    PopupComponent,
    FactsComponent,
    EditComponent,
    ForDirective,
    ShrinkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
