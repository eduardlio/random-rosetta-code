import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import {
   debounceTime, distinctUntilChanged, switchMap 
} from 'rxjs/operators';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
   selector: 'app-ex-search',
   templateUrl: './ex-search.component.html',
   styleUrls: ['./ex-search.component.css']
})
export class ExSearchComponent implements OnInit {
   exercises$: Observable<Exercise[]>;

   private terms = new Subject<string>();

   constructor(private exerciseService: ExerciseService) { }

   ngOnInit() {
      this.exercises$ = this.terms.pipe(
         debounceTime(300),
         distinctUntilChanged(),
         switchMap( (term: string) => this.exerciseService.searchExercises(term) )
      );
   }
   search(term: string): void {
      console.log("term: "+ term);
      this.terms.next(term);
   }
}
