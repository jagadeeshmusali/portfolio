import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'portfolio-foooter',
  templateUrl: './foooter.component.html',
  styleUrls: ['./foooter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoooterComponent {
  faEnvelope = faEnvelope;
}
