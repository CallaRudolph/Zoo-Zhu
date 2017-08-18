import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  ageStyle(currentAnimal) {
    if (currentAnimal.age > 10) {
      return "old";
    } else {
      return "";
    }
  }

  caretakerStyle(currentAnimal) {
    if (currentAnimal.caretakers >= 3) {
      return "needy";
    }
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  constructor() { }

  ngOnInit() {
  }

}
