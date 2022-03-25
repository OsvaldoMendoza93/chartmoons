import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DataGraphicModel } from '../../models/data-graphic.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataGraphicService {

  constructor(private http: HttpClient) { }

  getMetrics(): Observable<DataGraphicModel>{
    return this.http.get<DataGraphicModel>('assets/shared/dataMetrics.json')
    .pipe(
      map( res => res)
    )
  }

}
