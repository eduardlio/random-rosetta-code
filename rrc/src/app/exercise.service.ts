import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { EXERCISES } from './exercises';
import { Exercise } from './exercise';

@Injectable()
export class ExerciseService {


   private exerciseUrl= 'api/exercises';
   constructor(
      private http: HttpClient
   ) { }
   getExercises(): Observable<Exercise[]> {
      return this.http.get<Exercise[]>(this.exerciseUrl)
      .pipe(
         catchError(this.handleError('getExercises', []))
      );
   }
   getExercise(id: number): Observable<Exercise>{
      if ( id < 0 ){
         id = EXERCISES.length -1;
      } else if ( id > EXERCISES.length - 1){
         id = 0;
      } else {
         id = id;
      }
      const url = `${this.exerciseUrl}/${id}`;
      return this.http.get<Exercise>(url)
      .pipe(
         catchError(this.handleError<Exercise>(`getExercise id=${id}`))
      );
   }

   handleError<T>(operation='operation', result?: T){
      return (error: any): Observable<T> => {
         console.error(error);
         //         this.log(`${operation} failed: ${error.message}`);
         return of(result as T);
      } 
   }

   getRandomId(){
      var rand = Math.floor(Math.random()* EXERCISES.length);
      return rand;
   }
   getLastId(): number {
      return EXERCISES.length -1;
   }
   searchExercises(term: string): Observable<Exercise[]>{
      if(!term.trim()){
         return of([]);
      }
      return this.http.get<Exercise[]>(`api/exercises/?name=${term}`)
      .pipe(
         catchError(this.handleError<Exercise[]>(`searchExercises`, []))
      );
   }
}
