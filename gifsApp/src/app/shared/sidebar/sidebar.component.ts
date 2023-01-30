import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interface/gifs.interface';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

 
  constructor(private gifsService: GifsService) { }

  get gifsRecuperados() { 
    return this.gifsService.historial
  }

  buscarGif(item:string){
    // console.log(item)
    return this.gifsService.buscarGifs(item)
  }

}
