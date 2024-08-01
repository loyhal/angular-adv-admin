import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Grafica1Component } from '../grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from '../progress/progress.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule

  ]
})
export class PagesModule { }
