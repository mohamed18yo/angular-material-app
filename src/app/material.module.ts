import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialMdule {

}
