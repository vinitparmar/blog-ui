import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  get<T>(url : string){
    return this.http.get<T>(`${this.baseUrl}${url}`);
  }

  post<T>(url : string , body : any){
    return this.http.post<T>(`${this.baseUrl}${url}`,body);
  }

  put<T>(url : string , body : any){
    return this.http.post<T>(`${this.baseUrl}${url}`,body);
  }

  delete<T>(url : string){
      return this.http.get<T>(`${this.baseUrl}${url}`);
    }
}
