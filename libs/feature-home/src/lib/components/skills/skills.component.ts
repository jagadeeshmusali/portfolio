import { Component, Input } from '@angular/core';
import { Technologies } from '@portfolio/common';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skills: Technologies;
}
