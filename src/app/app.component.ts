import { Component } from '@angular/core';
import { DataGraphicService } from './services/data-graphic/data-graphic.service';
import { Metric } from './models/data-graphic.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-moons';
  metrics: Array<Metric> = [];
  percentage: number = 100;
  
  constructor(private graphicService: DataGraphicService) { }

  ngOnInit(): void {
    this.getDataGraphic();
  }

  getDataGraphic(){
    this.graphicService.getMetrics().subscribe(
      res => {
        this.metrics = res.metrics
        this.metrics.forEach(metric => {
          metric.totalSmartphone = (metric.total * metric.percentageSmartphone) / this.percentage;
          metric.totalTablet = (metric.total * metric.percentageTablet) / this.percentage;
        });
      },
      err => console.log(err)
    )
  }
  
}
