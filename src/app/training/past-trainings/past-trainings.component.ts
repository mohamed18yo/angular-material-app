import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css'],
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {
  data: Exercise[] = [];
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];

  dataSource:any
  // { filter: string; paginator: MatPaginator; sort: MatSort; }
  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    // this.trainingService.fetchCompleteOrCanceledExercises()
    this.data= this.trainingService.getCompleteOrCanceledExercises()
    // console.log(this.data);

    // .subscribe((result)=>{
    //   this.data = result.exercise.slice()
    // })

    this.dataSource = new MatTableDataSource(this.data)
    // this.runningEx = this.trainingService.runningExercise;
    // console.log(this.runningEx);
  }

  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
