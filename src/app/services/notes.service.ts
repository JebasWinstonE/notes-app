import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable()
export class NotesService {
  notes: Note[] = [];
  notes$: Observable<Object> = new Observable();

  constructor(private http: HttpClient) { }

  //* Insert Note 
  insertNote(title: string, desc: string): Observable<any> {
    if (
      (title.length > 0 && desc.length > 0) ||
      (title.length > 0 && desc.length === 0) ||
      (title.length === 0 && desc.length > 0)
    ) {
      try {
        this.notes$ = this.http.post('https://my-notes-55-default-rtdb.firebaseio.com/notes.json',
          new Note(title, desc))
      } catch (e: any) {
        console.log(e)
      }
    }
    return this.notes$
  }

  //* Get One Note 
  getNote(id: any) {
    return this.http.get<Note>('https://my-notes-55-default-rtdb.firebaseio.com/notes/' + id + '.json')
  }

  //* Get All Notes 
  getAllNotes() {
    return this.http.get<Note[]>('https://my-notes-55-default-rtdb.firebaseio.com/notes.json')
      .pipe(map(data => {
        let notesArray = []
        for (let key in data) {
          notesArray.push({ ...data[key], id: key })
        }
        return notesArray
      }))
  }

  //* Update Note
  updateNote(title: string, desc: string, id: string) {
    if (title.length == 0 && desc.length == 0) {
      return this.http.delete<Note>('https://my-notes-55-default-rtdb.firebaseio.com/notes/' + id + '.json')
    }
    return this.http.put<Note>('https://my-notes-55-default-rtdb.firebaseio.com/notes/' + id + '.json', new Note(title, desc))
  }

  // https://my-notes-55-default-rtdb.firebaseio.com/notes/-NRDObzCM0a8niPsdcnU.json NRDObzCM0a8niPsdcnU
}