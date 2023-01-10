import { Injectable } from '@angular/core';
import { Personaje } from './personaje.model';


export class DbzService {

    personajes: Personaje[] = [
        new Personaje("Goku", 20000),
        new Personaje("Vegeta", 10000),
        new Personaje("Krillin", 8000)
    ]


    constructor() { }

    obtenerPersonajes() {
        return this.personajes;
    }
    agregaPersonaje(personaje: Personaje) {
        this.personajes.push(personaje);
    }
}