import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isActive = false;
  toggleMenu = () =>  this.isActive = !this.isActive;
  
}
