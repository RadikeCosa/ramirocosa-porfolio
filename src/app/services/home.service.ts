import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../components/home/ihome';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  home: Home = {
    name: 'Ramiro',
    surname: 'Cosa',
    title1: 'algo',
    title2: 'otra cosa',
    cap1: 'aclaracion',
    cap2: 'otra aclaracion',
  };

  constructor() {}

  public getHome(): Home {
    return this.home;
  }
}
