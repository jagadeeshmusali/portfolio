import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Testimonial } from '@portfolio/common';

@Component({
  selector: 'portfolio-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  @Input() testimonials: Testimonial[];
}
