import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormularioAgregarComponent } from './formulario-agregar/formulario-agregar.component';
import { ListaDbzComponent } from './lista-dbz/lista-dbz.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from './dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    FormularioAgregarComponent,
    ListaDbzComponent
  ],
  exports: [
    MainPageComponent,
    FormularioAgregarComponent,
    ListaDbzComponent
  ],
  providers: [DbzService],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
