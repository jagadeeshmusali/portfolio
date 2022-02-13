import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'portfolio-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @Input() greetingMessage: string;
  @Input() aboutMe: string;
  constructor() { }

  ngOnInit(): void {
  }

}
