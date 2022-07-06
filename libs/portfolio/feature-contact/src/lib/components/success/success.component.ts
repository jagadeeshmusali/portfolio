import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessComponent {}
