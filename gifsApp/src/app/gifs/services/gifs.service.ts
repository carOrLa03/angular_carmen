import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "AC7PknJbIUyb88TbbJ0TCm5qOsf423T3";
  private _historial: string[] = []

  constructor(private httpClient: HttpClient) { }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    if (query.trim().length === 0) return;
    if (this._historial.includes(query)) return; //si la query esta en el array nos devuelve a la pagina para volver a introducir un gif



    this._historial.unshift(query) //insertamos al inicio del array
    this._historial = this._historial.splice(0, 10);
    console.log(this._historial)


    this.httpClient.get("https://api.giphy.com/v1/gifs/search?api_key=AC7PknJbIUyb88TbbJ0TCm5qOsf423T3&q=dragon ball z&limit=10")
      .subscribe((resp: any) => {
        console.log(resp.data);
      })

    // fetch("https://api.giphy.com/v1/gifs/search?api_key=AC7PknJbIUyb88TbbJ0TCm5qOsf423T3&q=dragon ball z&limit=10")
    //   .then(resp => {
    //     resp.json().then(data => {
    //       console.log(data);
    //     })
    //   })
  }

}
