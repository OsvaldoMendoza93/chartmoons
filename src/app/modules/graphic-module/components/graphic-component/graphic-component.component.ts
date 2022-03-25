import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import { Metric } from '../../../../models/data-graphic.model';
@Component({
  selector: 'app-graphic-component',
  templateUrl: './graphic-component.component.html',
  styleUrls: ['./graphic-component.component.scss']
})
export class GraphicComponentComponent implements OnInit {
  @ViewChild('mycanvas') canvas:ElementRef; 
  @Input() metric: Metric;
  percentage: number = 100;
  /* Graphic */
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartData: ChartData<'doughnut'>;
  doughnutChartOptions: any;

  constructor() { }
  
  ngOnInit(): void {
    this.buildChart();
  }

  ngAfterViewInit(): void {
    let ctx = this.canvas.nativeElement.getContext("2d");
    let me = this;
    this.doughnutChartOptions = {
      plugins:{
        tooltip:{
          enabled: false
        }
      },
      hover: {mode: null},
      cutout: '94%',
      responsive: true,
      animation:{ onComplete: function() {
        me.title(ctx);
        me.subTitle(ctx)
      }}
    }
  }
  
  buildChart(){
    this.doughnutChartData = {
      datasets: [
        { 
          data: [this.metric.percentageSmartphone, this.metric.percentageTablet],
          backgroundColor: [this.metric.colorSmartphone, this.metric.colorTablet],
          hoverBackgroundColor: [this.metric.colorSmartphone, this.metric.colorTablet],
          hoverBorderColor: [this.metric.colorSmartphone, this.metric.colorTablet], 
        }
      ],
    };
    this.doughnutChartOptions = {
      plugins:{
        tooltip:{
          enabled: false
        }
      },
      cutout: '94%',
      responsive: true,
    }
  }

  title(ctx) {
    let width = this.canvas.nativeElement.clientWidth,
        height = this.canvas.nativeElement.clientHeight;
        console.log(width, height)

    /* Configuracion de fuente */
    let fontSize = (height / 150).toFixed(1);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#4f4f4f";

    /* Posicionamieto de texto en la grafica */
    let text = `${ this.metric.title.toUpperCase() }`,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height -160;

    ctx.fillText(text, textX, textY);
    ctx.restore();
        
  }
      
  subTitle(ctx){
    let width = this.canvas.nativeElement.clientWidth,
        height = this.canvas.nativeElement.clientHeight;
        console.log(width, height)

    /* Configuracion de fuente */
    let fontSize = (height / 150).toFixed(1);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#d7d7d7";

    let text2 = `${ this.metric.title == 'Revenue' ? new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.metric.total) : Intl.NumberFormat("de-DE").format(this.metric.total) }`,
    text2X = Math.round((width - ctx.measureText(text2).width) / 2),
    text2Y = height -120;

    ctx.fillText(text2, text2X, text2Y);
    ctx.restore();
  }



}
