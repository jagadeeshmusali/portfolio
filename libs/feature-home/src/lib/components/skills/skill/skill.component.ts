import { Component, Input } from '@angular/core';
import { TechStack } from '@portfolio/common';

@Component({
  selector: 'portfolio-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  @Input() skill: TechStack;
  @Input() roleTitle: string;
  @Input() technologiesTitle: string;
  @Input() devToolsTitle: string;
}
