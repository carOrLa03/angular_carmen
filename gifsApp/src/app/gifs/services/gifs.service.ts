import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "AC7PknJbIUyb88TbbJ0TCm5qOsf423T3";
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  private _historial: string[] = []

  public resultados: Gif[] = []

  constructor(private httpClient: HttpClient) {
    //aqui es el lugar ideal para cargar del local storage ya que solo se va a ejecutar una vez
    //parse -> caso opuesto del stringfy : convierte un string a un objeto
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!); // con el signo de admiración le decimos a Angular que confíe en nosotros, 
      //es decir que sabemos lo que estamos haciendo
    }

    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(localStorage.getItem('resultados')!)
    }
  }

  get historial() {
    return [...this._historial];
  }


  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase(); //ejercicio 23

    if (query.trim().length === 0) return;
    // if (this._historial.includes(query)) return; //si la query esta en el array nos devuelve a la pagina para volver a introducir un gif

    // this._historial.unshift(query) //insertamos al inicio del array
    // this._historial = this._historial.splice(0, 10);

    if (!this._historial.includes(query)) {
      this._historial.unshift(query) //insertamos al inicio del array
      this._historial = this._historial.splice(0, 10);

      //para guardar en el local Storage no necesitamos importar nada ya que es propio de JS
      localStorage.setItem('historial', JSON.stringify(this._historial)) //solo puedo  guardar strings y stringify convierte un objeto a un string


    }


    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('limit', '10')
      .set('q', query)

    console.log(params.toString())

    this.httpClient.get<SearchGIFResponse>(`${this.servicioUrl}/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((resp: any) => {
        this.resultados = resp.data
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })

    // fetch("https://api.giphy.com/v1/gifs/search?api_key=AC7PknJbIUyb88TbbJ0TCm5qOsf423T3&q=dragon ball z&limit=10")
    //   .then(resp => {
    //     resp.json().then(data => {
    //       console.log(data);
    //     })
    //   })
  }

}
