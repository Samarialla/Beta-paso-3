import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/login/ionic';

  constructor( private http: HttpClient) {
   }
}
