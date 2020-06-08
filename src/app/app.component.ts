import { Component, OnInit } from '@angular/core';

import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex-angular';

  selectedPage: number;
  pokedex: Pokemon[];
  loading: boolean;
  offset: number;
  limit: number = 100;

  ngOnInit(): void {
    this.selectPage(1);
  }

  constructor(private pkmnService: PokemonService) { }

  selectPage(page) {
    this.loading = true;
    this.selectedPage = page;
    this.pokedex = [];
    this.offset = (this.selectedPage - 1) * 100;
    let resp = this.pkmnService.getPokedex(this.limit, this.offset);
    resp.subscribe((data) => this.getSinglePkmn(data))
  }

  getSinglePkmn(data: any) {
    for (let i: number = 0; i < this.limit; i++) {
      let resp = this.pkmnService.getDetails(data["results"][i]["url"]);
      resp.subscribe((data) => this.addToPokedex(data)
      )
    }
    this.loading = false;
  }

  addToPokedex(data: any) {
    let strTypes = "";

    let newPokemon = {
      id: data["id"],
      name: data["name"],
      height: data["height"],
      weight: data["weight"],
      picFront: data["sprites"]["front_default"],
      picBack: data["sprites"]["back_default"],
      picShiny: data["sprites"]["front_shiny"],
      types: data["types"],
    }

    for (let t of newPokemon.types) {
      strTypes += t["type"]["name"] + " ";
    }

    newPokemon.types = strTypes;

    this.pokedex.push(newPokemon);

  }

}
