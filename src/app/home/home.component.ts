import { Component, OnInit } from '@angular/core';
import { TourismService } from '../tourism.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  touristLocations: any;

  constructor(private httpService: TourismService, private route: Router) { }

  ngOnInit(): void {
    this.getDetails();
  }

  /**
   * Get the tourism location service call
   */
  getDetails(){
   this.httpService.tourismDetails("assets/tourismlist.json").subscribe(
     data => {
      let locations  = [];
      data.tntourismdetails.forEach((element, index) => {
        let placeIndex = index + 1;
        locations.push(element[`place${placeIndex}`]);
      });
     this.touristLocations = locations;
   });
  }

  /**
   * Pass the selected location to detail screen
   */
  selectedLocation(location) {
    this.route.navigateByUrl('detail', {state: { locationDetails: location}});
  }
}
