import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  URL = 'https://ramiro-porfolio.herokuapp.com/porfolio-service/about/';

  constructor(private http: HttpClient) {}

  public getAbout(): Observable<any> {
    return this.http.get<any>(this.URL);
  }
}
