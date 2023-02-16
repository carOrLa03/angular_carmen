import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import localeFR from '@angular/common/locales/fr'
import localeES from '@angular/common/locales/es'
import localeCAT from '@angular/common/locales/ca-ES-valencia'
registerLocaleData(localeCAT)
registerLocaleData(localeES)
registerLocaleData(localeFR)

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule, } from 'primeng/fieldset';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    FieldsetModule,
    BrowserAnimationsModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ca-ES-valencia' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
