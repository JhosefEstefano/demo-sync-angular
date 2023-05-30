import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get<Data[]>(`assets/data/ConsultaVentas.json`);
  }
}