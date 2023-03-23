import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private notesService: NotesService) { }

  addNote(title: string, desc: string) {
    this.notesService.insertNote(title, desc)
  }
}
