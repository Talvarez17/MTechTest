import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  baseUrl = 'http://localhost:5230/api/employee';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8; Access-Control-Allow-Origin'
    })
  };

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.baseUrl,this.httpOptions);
  }

  post(Data: any) {
    return this.http.post(this.baseUrl, Data, this.httpOptions);
  }
}
