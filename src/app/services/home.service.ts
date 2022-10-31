import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../models/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  URL = 'https://ramiro-porfolio.herokuapp.com/porfolio-service/home/';

  constructor(private http: HttpClient) {}

  public getHome(): Observable<Home> {
    return this.http.get<any>(this.URL);
  }
}
