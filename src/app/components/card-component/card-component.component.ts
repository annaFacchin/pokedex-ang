import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  @Input() pokedex: Pokemon[];
  
  pkmnId: number;
  pkmnName: string;
  pkmnPicFront: string;
  pkmnPicBack: string;
  pkmnPicShiny: string;
  pkmnTypes: string;
  pkmnWeight: number;
  pkmnHeight: number;

  constructor() { }

  ngOnInit(): void { }

  getDetails(name, id, picFront, picBack, picShiny, types, weight, height) {
    this.pkmnName = name;
    this.pkmnId = id;
    this.pkmnPicFront = picFront;
    this.pkmnPicBack = picBack;
    this.pkmnPicShiny = picShiny;
    this.pkmnTypes = types;
    this.pkmnWeight = weight;
    this.pkmnHeight = height;
  }

}
