import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home: any;
  house: any;

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getHome().subscribe((data) => {
      this.home = data;
      console.log(this.home[0]);
    });
  }
}
