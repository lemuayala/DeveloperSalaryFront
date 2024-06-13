import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  private url = 'https://developersalaryprojectapi.onrender.com/api/usuarios';

  constructor(private http: HttpClient) {}

  getSalaries(): Observable<any> {
    return this.http.get(this.url);
  }
}
