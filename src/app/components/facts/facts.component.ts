import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Fact } from 'src/app/models/fact.model';
import { FactService } from 'src/app/services/fact.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent {

  constructor(private factService: FactService) { }

  show: boolean = true;
  data: any = [];
  observable$: Observable<Fact[]> = new Observable;
  // data = "Annually 7 million tons of textiles and clothing is thrown out. Out of this, only 12% is used again or recycled."

  @Output() showFactEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  ngOnInit() {
    // this.factService.getFact().subscribe(value => {
    //   this.data = value[0].fact;
    // })

    this.observable$ = this.factService.getFact();
    // this.showFactEvent.emit(this.show);
  }

  toggle() {
    this.show = !this.show;
    this.showFactEvent.emit(this.show);
  }
}
