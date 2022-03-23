import { Component, OnInit } from '@angular/core';
import { DataGraphicService } from '../../services/data-graphic/data-graphic.service';
import { Metrics } from '../../models/data-graphic.model';

@Component({
  selector: 'app-graphic-component',
  templateUrl: './graphic-component.component.html',
  styleUrls: ['./graphic-component.component.scss']
})
export class GraphicComponentComponent implements OnInit {
  metrics : Array<Metrics> = [];
  porcent : number = 100;

  constructor(private graphicService: DataGraphicService) { }

  ngOnInit(): void {
    this.getDataGraphic()
  }

  getDataGraphic(){
    this.graphicService.getMetrics().subscribe(
      res => {
        this.metrics = res.metrics
        this.metrics.forEach(metric => {
          metric.totalSmartphone = (metric.total * metric.porcentSmartphone) / this.porcent;
          metric.totalTablet = (metric.total * metric.porcentTablet) / this.porcent;
        });
        console.log(this.metrics)
      },
      err => console.log(err)
    )
  }

}
