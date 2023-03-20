import { Note } from "../models/note.model";

export class NotesService {

  notes: Note[] = []
  insertNote(title: string, desc: string) {
    this.notes.push(new Note(title, desc))
  }
}
