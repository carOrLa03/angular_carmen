import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';



@NgModule({
  declarations: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
