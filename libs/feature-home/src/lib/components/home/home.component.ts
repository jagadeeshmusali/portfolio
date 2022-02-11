import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "@portfolio/common";
import {Store} from "@ngrx/store";
import {userSelector} from "@portfolio/portfolio/data-access-user";

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataFromStore : Observable<User> = this.store.select(userSelector);

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
