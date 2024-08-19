import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/app/pages/grafica1/chart.model';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() serie = [44, 55, 41, 17, 90];
  @Input() test = ["Uno","Dos","Tres","Cuatro","Cinco"];
  @Input() title="Titulo"
    
  constructor(){
    console.log(this.test);
   
  }
  ngOnInit() {
    this.chartOptions = {
      series: this.serie,
      chart: {
        width: 380,
        type: "donut"
      },
      labels:this.test,
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function(val, opts) {
          console.log(val + " - " + opts.w.globals.series[opts.seriesIndex])
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
