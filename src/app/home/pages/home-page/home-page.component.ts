import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FlightModel } from '../../interfaces/flight.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  origin: string = 'MZL';
  destination: string = 'MAD';
  data: FlightModel[] = [];
  rounds: number = 0;
  selectedFlights: FlightModel[] = [];
  result: FlightModel[] = [];

  constructor( private homeService: HomeService ){ }

  search(){
    this.homeService.getFlights().subscribe({
      next: (flights) => {
        this.selectedFlights = [];
        this.data = flights;
        this.result = this.recursiveSearch(this.data, this.destination);
        this.result.reverse();
      },
      error: (error) => console.log(error)
    });
  }

  recursiveSearch(flights: FlightModel[], destination: string) : any {
    let romper = false;

    let filteredFlights = flights.filter(flight => flight.arrivalStation == destination);
    
    for (let i = 0; i < filteredFlights.length; i++) {

      this.selectedFlights.push(filteredFlights[i]);

      if(filteredFlights[i].departureStation == this.origin || this.selectedFlights.length == this.data.length){
        romper = true;
        break;
      }
      
      return this.recursiveSearch(this.data, filteredFlights[i].departureStation);
    }

    if(romper){
      return this.selectedFlights;
    }
  }
}