import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Hello } from '@portfolio/common';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  apiBaseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('environment') private environment: any
  ) {
    this.apiBaseUrl = environment.apiUrl;
  }

  sayHello(hello: Hello): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}hello`, hello);
  }

  private extractData(res: any) {
    const body = res;
    return body;
  }
}
