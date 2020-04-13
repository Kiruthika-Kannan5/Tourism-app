import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  constructor(private http: HttpClient) { }

  tourismDetails(url): Observable<any> {
    return this.http.get(url);
  }
}
