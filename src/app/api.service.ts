import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://192.168.178.35:8080/api";

  constructor(private http: HttpClient) {
  }

  callOpenCurtain(): Observable<Object>{
    console.log(this.apiUrl+"/open");
    return this.http.get(this.apiUrl+"/open");
  }

  closeOpenCurtain(): Observable<Object>{
    console.log(this.apiUrl+"/close");
    return this.http.get(this.apiUrl+"/close");
  }
  stopOpenCurtain(): Observable<Object>{
    console.log(this.apiUrl+"/getState");
    return this.http.get(this.apiUrl+ "/getState");
  }

}
