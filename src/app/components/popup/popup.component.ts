import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(private notesService: NotesService, private router: Router) { }

  formGroup: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  // addNote(title: string, desc: string) {
  //   this.notesService.insertNote(title, desc).subscribe(() => {
  //     this.router.navigate(['/'])
  //   })
  // }

  addNote() {
    this.notesService.insertNote(this.formGroup.value.title, this.formGroup.value.description)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }
}