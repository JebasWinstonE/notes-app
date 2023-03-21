import { EventEmitter } from '@angular/core';
import { Note } from '../models/note.model';

export class NotesService {
  notes: Note[] = [];
  insertNote(title: string, desc: string) {
    if (
      (title.length > 0 && desc.length > 0) ||
      (title.length > 0 && desc.length === 0) ||
      (title.length === 0 && desc.length > 0)
    ) {
      this.notes.push(new Note(title, desc));
    }
  }
}
