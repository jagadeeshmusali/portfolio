import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { delay, Observable, of, switchMap } from 'rxjs';
import {
  FakeGraphApiConfig,
  FAKE_GRAPH_API_CONFIG,
} from './fake-graph-api-config';

@Injectable({
  providedIn: 'root',
})
export class FakeGraphBackendHttpInterceptor implements HttpInterceptor {
  constructor(
    @Inject(FAKE_GRAPH_API_CONFIG) private config: FakeGraphApiConfig
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleRequests(req, next);
  }

  handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, body } = req;
    const mockedResponse = this.config.GraphApiResponseMappersList.find(
      (val) => body.operationName == val.operation
    );
    // if there is existing data and append enabled, merge the existing data with the mocked response
    // if (mockedResponse && mockedResponse.merge) {
    //   return next.handle(req).pipe(
    //     switchMap((event: HttpEvent<any>) => {
    //       if (event instanceof HttpResponse && event.status === 200){
    //         console.log('data from library', { ...event.body.data, ...mockedResponse.response });
    //         return of(
    //           new HttpResponse({
    //             status: event.status,
    //             body: { data: { ...event.body.data, ...mockedResponse.response } },
    //           })
    //         );
    //       }
    //
    //       return of(event);
    //     }),
    //     delay(mockedResponse.delay || 0)
    //   );
    // }
    // if there is existing mocked response, return it
    if (mockedResponse && !mockedResponse.disable) {
      return of(
        new HttpResponse({
          status: 200,
          body: { data: mockedResponse.response },
        })
      ).pipe(delay(mockedResponse.delay || 0));
    }
    // if there is no mocked response, return the server response
    return next.handle(req);
  }
}
