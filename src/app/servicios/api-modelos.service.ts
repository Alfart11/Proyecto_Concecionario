import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiModelosService {

  constructor(
    private http: HttpClient
  ) {}

  // getAutos() {
  //   return this.http.get{'http://localhost:3500/api/v1/autos'}
  //  }
}
