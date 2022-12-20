import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }}</h1>
        <p> la base es: {{ base }}</p>
        <button (click)="operar('+')"> Sumar + 5</button>
        <label> {{ result }}</label>
        <button (click)="operar('-')"> Restar - 5</button>
    `,
    styleUrls: ['../app.component.sass']
})

export class ContadorComponent {
    title = 'Contador app';
    base: number = 5;
    result: number = 10;

    operar(signo: string) { if (signo == '+') { this.result += this.base } else { this.result -= this.base } }
}