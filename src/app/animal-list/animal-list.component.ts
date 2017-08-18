import { Component, OnInit, Input } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  @Input() childAnimalList: Animal[];

  constructor() { }

  ngOnInit() {
  }

}
