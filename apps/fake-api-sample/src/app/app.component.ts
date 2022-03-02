import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fake-api-sample';
  sampleData: any;
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/user').subscribe((data)=>{
      this.sampleData = data;
      console.log(data);
    })
  }
}
