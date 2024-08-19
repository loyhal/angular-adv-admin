import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from './chart.model';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labelInfo = ["Uno","Dos","Tres","Cuatro","Cinco"]
  public labelInfo2 = ["Seis","siete","Ocho","Nueve","Diez"]
  public labelInfo3 = ["Once","Doce","Trece","Catorce","quince"]
  public labelInfo4 = ["1","2","3","4","5"]
  public serieInfo = [40,50,21,15,60]
  public serieInfo2 = [20,36,74,25,10]
  
  constructor() { 
    console.log(this.labelInfo)
    
  }

  ngOnInit(): void {
    this.labelInfo = ["Uno","Dos","Tres","Cuatro","Cinco"]
    this.labelInfo2 = ["Seis","siete","Ocho","Nueve","Diez"]
    this.labelInfo3 = ["Once","Doce","Trece","Catorce","quince"]
    this.labelInfo4 = ["1","2","3","4","5"]
    this.serieInfo = [40,50,21,15,60]
    this.serieInfo2 = [20,36,74,25,10]
   
  }

}
