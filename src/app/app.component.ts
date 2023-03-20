import { Component } from '@angular/core';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesService]
})
export class AppComponent {
  title = 'notes-app';
  constructor(private notesService: NotesService) { }
}
