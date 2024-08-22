import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../../pages/grafica1/chart.model';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 20;
  @Input() btnClass: string = "btn-primary";

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor (valor: number){
    if(this.progreso >= 100 && valor>=0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number){
    if(nuevoValor >= 100){
      this.progreso = 100;
    } else if(nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
      
    this.valorSalida.emit(this.progreso)
  }
  constructor() {
   }

  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }

}
