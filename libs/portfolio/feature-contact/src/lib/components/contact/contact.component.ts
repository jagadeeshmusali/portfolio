import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Hello } from '@portfolio/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { HelloService } from '@portfolio/portfolio/data-access-hello';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  faClose = faClose;
  name: string;
  email: string;
  message: string;
  disableSubmit: boolean;
  constructor(private helloService: HelloService, private router: Router) { }
  sayHello(){
    if(!this.name || !this.email || !this.message) return;
    const hello: Hello = {name: this.name, email: this.email, message: this.message};
    this.postHello(hello);
    this.router.navigate(['/success']);

  }

  postHello(hello: Hello): void {
    this.helloService.sayHello(hello)
       .subscribe(() => console.log('hello posted'),
         (error: any) => console.log('error posting hello', error));
 }

}
