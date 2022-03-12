import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialComponent {
  @Input() testimonial: string;
  @Input() name: string;
  @Input() designation: string;
  @Input() company: string;
  @Input() image: string;
}
