import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-creative-work',
  templateUrl: './creative-work.component.html',
  styleUrls: ['./creative-work.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreativeWorkComponent {
  @Input() titleImageClass: string;
  @Input() description: string;
  @Input() link: string;
  @Input() linkText: string;
  @Input() isDisabled: boolean;
}
