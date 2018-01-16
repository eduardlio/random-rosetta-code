import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

   exercises: Exercise[];

   constructor(private exerciseService: ExerciseService) { }

   ngOnInit() {
      this.getExercises();
   }
   getExercises() {
      this.exerciseService.getExercises()
         .subscribe( exercises => this.exercises = exercises);
   }
}
