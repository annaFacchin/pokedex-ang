import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  
  @Input() loading: boolean;
  @Input() pokedex: Pokemon[];

  constructor() { }
  
  ngOnInit(): void { }

}
