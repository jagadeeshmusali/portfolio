import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  aboutMeSelector,
  greetingMessageSelector,
  tagLineSelector
} from "@portfolio/portfolio/data-access-user";

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tagLine$: Observable<string> = this.store.select(tagLineSelector);
  greetingMessage$: Observable<string> = this.store.select(greetingMessageSelector);
  aboutMe$: Observable<string> = this.store.select(aboutMeSelector);
  constructor(private store: Store<any>) { }
}
