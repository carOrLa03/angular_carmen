import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Contador app';
  base: number = 5;
  result: number = 10;

  operar(signo: string) { if (signo == '+') { this.result += this.base } else { this.result -= this.base } }
}

