import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  debug,
  every,
  filterKey,
  filterKeys,
  pageHidden$,
  pageVisible$,
  poll, some,
  visibilityChange$
} from "ngx-rxjs-extensions";
import {BehaviorSubject, combineLatest, from, fromEvent, map, Observable, of} from "rxjs";

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fake-api-sample';
  sampleData: any;
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/user')
      .pipe(
        poll(10000),
      )
      .subscribe((data) => {
      this.sampleData = data;
      console.log(data);
    });
    fromEvent(document, 'keyup')
      .pipe(
        filterKeys('ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'),
        debug('Keyboard'),
      ).subscribe();



    const conditionA$=new BehaviorSubject<boolean>(false);
    const conditionB$=new BehaviorSubject<boolean>(true);
    const conditionC$=new BehaviorSubject<boolean>(true);

    const buttonDisabled$ = combineLatest([
      conditionA$,
      conditionB$,
      conditionC$,
    ]).pipe(
      every(),
    )
      .subscribe((val) => {
        console.log('EVERY', val)
      });


    setTimeout(() => {
      // Simulating changes in condition A, B, C values
      // Replace these with your actual logic to update the condition observables
      conditionA$.next(true);
      conditionB$.next(true);
      conditionC$.next(true);
    }, 5000);
  }
}
