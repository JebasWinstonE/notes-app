import { Component } from '@angular/core';
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

  constructor(private notesService: NotesService, private activeRoute: ActivatedRoute, private router: Router) { }

  note$: Observable<Note> = new Observable();
  paramSubscription: Subscription = new Subscription();
  id: any = '';

  updateNote(title: string, desc: string, id: string) {
    this.notesService.updateNote(title, desc, id).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  ngOnInit() {
    this.paramSubscription = this.activeRoute.paramMap.subscribe(value => {
      this.id = value.get('id');
      this.note$ = this.notesService.getNote(value.get('id'))
    })
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe()
  }
}
