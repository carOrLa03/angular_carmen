import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { I18nSelectPipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre: string = "Carmen";
  gender: string = 'female';
  map: any = { 'male': 'invitarlo', 'female': 'invitarla', 'other': 'invitarles' };


  clientes: string[] = ['maria', 'emilio', 'pablo', 'carmen', 'alex', 'guille', 'pau'];
  messageMapping:
    { [k: string]: string } = { '=0': 'no hay clientes', '=1': '1 cliente', 'other': '# clientes.' };

  persona = {
    nombre: "Carmen",
    edad: "37",
    direccion: "Buñol"
  }

  heroes = [
    {
      nombre: "ironman",
      vuela: true
    },
    {
      nombre: "Gamora",
      vuela: false
    },
    {
      nombre: "mrs marvel",
      vuela: true
    },
    {
      nombre: "black Widow",
      vuela: false
    },
  ]

  miObservable = interval(1000);

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }

  cambiarpersona() {
    this.nombre = 'Manolo';
    this.gender = 'male';
  }
  borrarCliente() {
    this.clientes.shift();
  }

valorPromesa = new Promise((res, reject)=>{
  setTimeout(()=>{
    res('Tenemos data de promesa')
  }, 3500)
})

}
