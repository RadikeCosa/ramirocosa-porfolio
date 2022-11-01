import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  about: any;
  constructor(public aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((data) => {
      this.about = data;
      console.log(this.about[1].title);
      console.log(this.about[2].title);
      console.log(this.about[0].title);
    });
  }
}
