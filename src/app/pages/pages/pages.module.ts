import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Grafica1Component } from '../grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from '../progress/progress.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';



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
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    NgApexchartsModule
   ]
})
export class PagesModule { }
