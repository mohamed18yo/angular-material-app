import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog/';

@Component({
  selector: 'app-stop-training',
  template: `<h1>Are you sure?</h1>
    <mat-dialog-content>

    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions> `,
})
export class StopTrainingComponent {
  constractor() {}
}
