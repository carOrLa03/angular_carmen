import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesAPP';
  nombre: string = "carmen ortiz lazaro";
  valor: number = 1000;

  obj = {
    nombre: "Emilio"
  }



  mostrarNombre() {
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj)
  }
}




