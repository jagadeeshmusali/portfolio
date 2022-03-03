import { Inject, Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay, Observable, of } from "rxjs";
import { FakeApiConfig, FAKE_API_CONFIG } from "./fake-api-config";


@Injectable({
    providedIn: 'root'
})

export class FakeBackendHttpInterceptor implements HttpInterceptor {
    
    constructor(@Inject(FAKE_API_CONFIG) private config: FakeApiConfig) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        return this.handleRequests(req, next);
      }

    handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
        const { url, method } = req;
        const mockedResponse = this.config.ApiResponseMappersList
        .find(val =>{
          const matchType = val.matches ? url.match(`${val.matches}$`) : url.includes(val.route)
          return matchType && method == val.method;
        });
        if (mockedResponse) {
            return of(new HttpResponse({ 
                status: 200, body: mockedResponse.response 
            }))
            .pipe(delay(mockedResponse.delay || 0));
          }
          
        return next.handle(req);
    }

}

