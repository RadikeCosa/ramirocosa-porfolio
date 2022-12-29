import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { AboutList } from './iabout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutList!: AboutList[];
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutList = this.aboutService.getAbout();
  }
}
