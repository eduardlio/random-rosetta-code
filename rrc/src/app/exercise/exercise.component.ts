import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
   selector: 'app-exercise',
   templateUrl: './exercise.component.html',
   styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

   @Input() exercise: Exercise;

   length: number;
   constructor(
      private exerciseService: ExerciseService,
      private location: Location,
      private route: ActivatedRoute
   ) { }

   ngOnInit() {
      this.getExercise();
   }
   getExercise(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.exerciseService.getExercise(id)
         .subscribe(exercise => this.exercise = exercise);
      this.length =this.exerciseService.getLastId();
   }
   setExercise(id: number){
      this.exerciseService.getExercise(id)
         .subscribe( exercise => this.exercise = exercise);
   }
   prev(): number{
      const id = this.exercise.id === 0 ? this.length : this.exercise.id -1; 
      this.location.go("/exercise/"+id, "");
      return id;
   }
   next(): number{
      const id = this.exercise.id === this.length ? 0 : this.exercise.id + 1;
      this.location.go("/exercise/"+id, "");
      return id;
   }
   random(): number{
      var rand= Math.floor(Math.random() * this.length);
      this.location.go("/exercise/"+rand, "");
      return rand;
   }
}
