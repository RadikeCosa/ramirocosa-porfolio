import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutList } from '../components/about/iabout';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  aboutList: AboutList[] = [
    {
      title: 'programador',
      description: 'soy programador bastante bueno che',
      image: ' aca iria el link de la foto',
    },
  ];

  constructor() {}

  public getAbout(): any {
    return this.aboutList;
  }
}
