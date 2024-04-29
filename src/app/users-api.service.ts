import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any[]>('http://localhost:5000/api/etudiants');
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/etudiants', data);
  }

  updateData(data: any): Observable<any> {
    return this.http.put<any>('http://localhost:5000/api/etudiants', data);
  }

  deleteUser(data: any): Observable<any> {
    return this.http.delete<any>('http://localhost:5000/api/etudiants', {
      body: data,
    });
  }
}
