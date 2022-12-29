import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Home } from './ihome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home!: Home;
  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.home = this.homeService.getHome();
  }
}
