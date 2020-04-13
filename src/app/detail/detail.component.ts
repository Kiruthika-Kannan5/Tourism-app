import { Component, OnInit } from '@angular/core';
import { TourismService } from '../tourism.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  locationDetails: any;
  tourismDetails: any;

  imgUrl="assets/1001/main.jpg";

  constructor(private httpService: TourismService, private route: Router) { }

  ngOnInit(): void {
    if(window.history.state && window.history.state.locationDetails) {
      this.locationDetails = window.history.state.locationDetails;
      this.getLocationDetails();
    } else {
      this.route.navigateByUrl('home');
    }
  }

  getLocationDetails() {
    let url = `assets/place0${this.locationDetails.id}.json`;
    this.httpService.tourismDetails(url).subscribe(data=> {
      this.tourismDetails = data;
    });
  }
}
