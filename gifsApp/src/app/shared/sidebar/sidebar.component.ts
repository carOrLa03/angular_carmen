import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  gifsRecuperados: string[] = []
  constructor(private gifsService: GifsService) { }

  ngOnInit(){
    this.gifsRecuperados = this.gifsService.historial
  }

}
