import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 
  constructor(private navigate: Router) { }

  ngOnInit(): void {
  }

  goToPage(){
    this.navigate.navigateByUrl('home');
  }

}
