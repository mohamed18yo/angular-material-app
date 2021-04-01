import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  onGoingTraining = false;
  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.trainingService.exerciseChange.subscribe((ex) => {
      if (ex) {
        this.onGoingTraining = true;
      } else {
        this.onGoingTraining = false;
      }
    });
  }
}
