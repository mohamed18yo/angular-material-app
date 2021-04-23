import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) {}
  exercises: Exercise[] = [];
  private trainingSub!: Subscription;

  ngOnInit(): void {
    // this.trainingService.getExercise().subscribe((result) => {
    //   console.log(result.exercises);
    //   this.exercises = result.exercises;
    // });

    this.trainingService.getExercise()
    this.trainingSub= this.trainingService.getAvilExercises().subscribe((data)=>{
      // console.log(data);

      this.exercises= data
    }) 

  }

  onStartTraining(form: NgForm) {
    // this.trainingStart.emit()
    // console.log(form.value.exercise);
    this.trainingService.startExercise(form.value.exercise);
  }
  ngOnDestroy() {
    this.trainingSub.unsubscribe();
  }
}
