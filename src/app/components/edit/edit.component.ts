import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  // note$: Observable<Note> = new Observable();
  note: Note = new Note('', '');
  paramSubscription: Subscription = new Subscription();
  noteSubscription: Subscription = new Subscription()
  id: any = '';
  // formGroup: FormGroup = new FormGroup({
  //   title: new FormControl(''),
  //   description: new FormControl('')
  // })

  constructor(
    private notesService: NotesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  formGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['']
  })

  // updateNote(title: string, desc: string) {
  //   this.notesService.updateNote(title, desc, this.id).subscribe(() => {
  //     this.router.navigate(['/'])
  //   })
  // }

  updateNote() {
    this.notesService.updateNote(this.formGroup.value.title, this.formGroup.value.description, this.id)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }

  ngOnInit() {
    this.paramSubscription = this.activeRoute.params.subscribe(value => {
      this.id = value['id'];
      // this.note$ = this.notesService.getNote(value['id'])
      this.noteSubscription = this.notesService.getNote(value['id']).subscribe((value) => {
        this.formGroup.setValue({ title: value.title, description: value.description })
      })
    })
    // this.formGroup.setValue({
    //   title: "Hello",
    //   description: "World"
    // })
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
    this.noteSubscription.unsubscribe()
  }

}
