import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'portfolio-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {
  @Input() tagLine = '';

}
