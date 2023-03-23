import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(private notesService: NotesService, private router: Router) { }

  addNote(title: string, desc: string) {
    this.notesService.insertNote(title, desc).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}