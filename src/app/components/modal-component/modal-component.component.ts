import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {

  @Input() pkmnId: number;
  @Input() pkmnName: string;
  @Input() pkmnPicFront: string;
  @Input() pkmnPicBack: string;
  @Input() pkmnPicShiny: string;
  @Input() pkmnTypes: string;
  @Input() pkmnWeight: number;
  @Input() pkmnHeight: number;

  constructor() { }

  ngOnInit(): void { }

}