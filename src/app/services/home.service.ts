import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  URL = 'https://ramiro-porfolio.herokuapp.com/porfolio-service/home/';

  constructor(private http: HttpClient) {}

  public getHome(): Observable<any> {
    return this.http.get<any>(this.URL);
  }
}
