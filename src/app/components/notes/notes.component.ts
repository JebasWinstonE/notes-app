import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  // popUp: boolean = false;
  // openPopup() {
  //   this.popUp = !this.popUp
  //   console.log(this.popUp);
  // }
  flag: boolean = true;
  notes: Note[] = []

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.notes;
  }

  factStatus(value: boolean) {
    this.flag = value
  }
}
