import { EventEmitter } from "@angular/core";
import { Note } from "../models/note.model";

export class NotesService {

  notes: Note[] = [];
  insertNote(title: string, desc: string) {
    if (title !== '' && desc !== '') {
      this.notes.push(new Note(title, desc));
    }
  }
}
