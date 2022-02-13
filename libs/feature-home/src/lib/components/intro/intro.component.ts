import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'portfolio-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {
  @Input() tagLine: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
