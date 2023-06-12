import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FlightModel } from '../interfaces/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient ) { }

  private _apiUrl = environment.apiUrl;

  getFlights(){
    return this.http.get<FlightModel[]>(`${this._apiUrl}/flights/2`);
  }
}