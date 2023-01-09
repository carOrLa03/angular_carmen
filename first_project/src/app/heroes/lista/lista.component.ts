import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent {

  title: string = 'Lista de Heroes';

  heroes: string[] = ['Thor', 'Spiderman', 'Superman', 'Hulk']
  heroeBorrado: string = "";

  borrarHeroe() {
    this.heroeBorrado += this.heroes.shift();
  }
}
