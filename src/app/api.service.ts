import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url: any;

  constructor(private http: HttpClient) {
    this.url = environment.basicUrl;
  }
  getData(typeVariable) {
    var newUrl = this.url + typeVariable;
    return this.http.get(newUrl)

  }



}
