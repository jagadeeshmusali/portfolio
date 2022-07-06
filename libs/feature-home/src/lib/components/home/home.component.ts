import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  aboutMeSelector,
  greetingMessageSelector,
  tagLineSelector,
  technologiesSelector,
  testimonialsSelector,
} from '@portfolio/portfolio/data-access-user';
import { Technologies, Testimonial } from '@portfolio/common';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tagLine$: Observable<string> = this.store.select(tagLineSelector);
  greetingMessage$: Observable<string> = this.store.select(
    greetingMessageSelector
  );
  aboutMe$: Observable<string> = this.store.select(aboutMeSelector);
  skills$: Observable<Technologies> = this.store.select(technologiesSelector);
  testimonials$: Observable<Testimonial[]> =
    this.store.select(testimonialsSelector);
  constructor(private store: Store<any>) {}
}
