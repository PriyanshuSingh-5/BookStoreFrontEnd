import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  post(url: string, data: any = false, isHeaderRequired: any = false, headers = null) {
    return this.http.post(url, data, isHeaderRequired && headers);
  }
  get(url: string, isHeaderRequired: any = false, headers = null) {
    return this.http.get(url, isHeaderRequired && headers);
  }
  put(url: string, data: any, isHeaderRequired: any = false, headers = null) {
    return this.http.put(url, data, isHeaderRequired && headers);
  }
  delete(url: string, headers: any) {
    return this.http.delete(url, headers);
  }
}
