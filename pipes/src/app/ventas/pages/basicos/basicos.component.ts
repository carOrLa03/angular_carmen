import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower: string = "Carmen"
  nombreUpper: string = "CARMEN"
  nombreCompleto: string = " carmen ortiz Lazaro"

  fecha: Date = new Date();
  fechaString: string = new Date().toDateString()
  todayISOString : string = new Date().toISOString();


}
