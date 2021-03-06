import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { MaterialMdule } from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HaederComponent } from './navigation/haeder/haeder.component';
import { AuthService } from './auth/auth.service';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { TrainingService } from './training/training.service';
import { HttpClientModule } from '@angular/common/http';
import { FirstpipePipe } from './firstpipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    PastTrainingsComponent,
    NewTrainingComponent,
    HaederComponent,
    SidenavListComponent,
    StopTrainingComponent,
    FirstpipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialMdule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,TrainingService],
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent]
})
export class AppModule { }
