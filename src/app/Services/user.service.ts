import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  register(data: { email: any; name: any; mobileNumber: any; password: any; userName: any; role: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpservice: HTTPService) { }

  static url = 'https://localhost:44356/api/';
  getHeaders = () => {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }

  registration = (data: any) => {
    return this.httpservice.post(`${UserService.url}CustomerAccount/Register`, data);
  };
  // login = (data: any) => {
  //   return this.httpservice.post(`${UserService.url}CustomerAccount/Login`, data);
  // };
  login = (data: any) => {
    return this.httpservice.post(`${UserService.url}CustomerAccount/Login`, data);
  };
}
