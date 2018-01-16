import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
   { path: 'exercises', component: ExercisesComponent },
   { path: 'exercise/:id', component: ExerciseComponent }
]
@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule {
}
