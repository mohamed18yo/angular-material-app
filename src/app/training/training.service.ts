import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  exerciseChange = new Subject<Exercise>();
  avilExercise = new Subject<Exercise[]>();
  avilableExercises: Exercise[] = [];
  //  = [
  //   { id: 'crunches', name: 'crunches', duration: 30, calories: 8 },
  //   { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
  //   { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
  //   { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  // ];

  private runningExercise!: Exercise | any;

  private changeExercises: Exercise[] = [];
  constructor(private http: HttpClient) {}
  getExercise() {
    this.http
      .get<{ exercises: Exercise[] }>('http://localhost:3000/training')
      .subscribe((resData) => {
        this.avilExercise.next([...resData.exercises]);
        this.avilableExercises = resData.exercises;
      });
  }
  getAvilExercises() {
    return this.avilExercise.asObservable();
  }
  startExercise(exerciseId: string) {
    this.runningExercise = this.avilableExercises.find(
      (ex) => ex.id === exerciseId
    );
    this.exerciseChange.next({ ...this.runningExercise });
    // console.log(this.runningExercise);
    // console.log(exerciseId);
  }
  completeExercise() {
    const finishedExercise = {
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    };
    this.changeExercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.saveFinishedExercise(finishedExercise);

    this.runningExercise = null;
    this.exerciseChange.next();
  }
  cancelExercise(progress: number) {
    const finishedExercise = {
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancaled',
    };
    this.changeExercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancaled',
    });

    this.saveFinishedExercise(finishedExercise);
    // console.log(this.exercises.slice());

    this.runningExercise = null;
    this.exerciseChange.next();
  }
  getRaniningExercis() {
    return { ...this.runningExercise };
  }
  getCompleteOrCanceledExercises() {

    return this.changeExercises.slice();
  }

  saveFinishedExercise(finishedExercise: Exercise) {
    // console.log(finishedExercise);

    this.http.post('http://localhost:3000/training', finishedExercise)
    // .subscribe((res) => {
    //   // console.log(res);
    // });
  }

  fetchCompleteOrCanceledExercises() {
    this.http
      .get<{ exercise: Exercise[] }>(
        'http://localhost:3000/training/finishedExercise'
      )
      .subscribe((res) => {
        // console.log(res);
       this.changeExercises= res.exercise

        // = res.exercise;
      });
  }
}
