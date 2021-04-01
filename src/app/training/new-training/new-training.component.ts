import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) {}
  exercises: Exercise[] = [];
  ngOnInit(): void {
    this.exercises = this.trainingService.getExercise();
  }
  onStartTraining(form: NgForm) {
    // this.trainingStart.emit()
    console.log(form.value.exercise);
    this.trainingService.startExercise(form.value.exercise);
  }
}
