import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable()
export class NotesService {
  notes: Note[] = [];
  notes$: Observable<Object> = new Observable()

  constructor(private http: HttpClient) { }

  insertNote(title: string, desc: string) {
    if (
      (title.length > 0 && desc.length > 0) ||
      (title.length > 0 && desc.length === 0) ||
      (title.length === 0 && desc.length > 0)
    ) {
      try {
        this.notes$ = this.http.post('https://my-notes-55-default-rtdb.firebaseio.com/notes.json', new Note(title, desc))
        this.notes$.subscribe((value) => {
          console.log(value)
        })
      } catch (e: any) {
        console.log(e)
      }
    }
  }

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

  // getAllNotes() {
  //   return this.http.get('https://my-notes-55-default-rtdb.firebaseio.com/notes.json')
  //     .pipe(map(data => {
  //       let array = []
  //       for (let id in data) {
  //         array.push({ ...array[id], id: id })
  //       }
  //       return array
  //     }))
  // }

}
