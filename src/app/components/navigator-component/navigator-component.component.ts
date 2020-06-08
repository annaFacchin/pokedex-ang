import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-navigator-component',
  templateUrl: './navigator-component.component.html',
  styleUrls: ['./navigator-component.component.css']
})
export class NavigatorComponentComponent implements OnInit {
  
  pagesToGenerate: number;
  loading: boolean;
  pagesArray = [];

  @Input() selectedPage: number;
  @Output() pageEmitter = new EventEmitter<number>();

  constructor(private PkmnService: PokemonService) { }

  ngOnInit(): void {
    this.loading= true;
    let resp = this.PkmnService.getPokedex(100, 0);
    resp.subscribe((data) => this.getPokemonCountResponse(data)
    )
  }
  
  getPokemonCountResponse(data: any) {
    let numberOfPokemon = data["count"]
    this.pagesToGenerate = Math.floor(numberOfPokemon / 100 + 1)
    for (let i = 0; i < this.pagesToGenerate; i++) {
      this.pagesArray.push(i + 1)
    }
    this.loading = false;
  }

  selectPage(page){
    this.pageEmitter.emit(page);
  }

  nextPage(){
    if (this.selectedPage!=10) {
      this.selectedPage++;
      this.pageEmitter.emit(this.selectedPage);
    }
  }

  prevPage(){
    if (this.selectedPage!=1) {
      this.selectedPage--;
      this.pageEmitter.emit(this.selectedPage);
    }
  }

}
