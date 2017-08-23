import { Component, OnInit } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to Zoo Zhu!!!';
  currentDate = new Date();
  selectedAnimal = null;
  totalCaretakers = 0;
  averageAge = 0;
  caretakerCheck = false;

  masterAnimalList: Animal[] = [
    new Animal('Flamingo', 'MuShu', 3, 'Omnivore', 'Lagoon', 2, 'Female', 'Standing on one leg', 'Being alone'),
    new Animal('Polar Bear', 'Salty', 13, 'Carnivore', 'Glacier', 4, 'Male', 'Eating the flesh of seals', 'Drunk bantering humans'),
    new Animal('Giraffe', 'Stalk', 1, 'Herbivore', 'Savanna', 6, 'Male', 'Open plains', 'Lions, Leopards, Hyenas'),
    new Animal('Meerkat', 'G-Unit', 2, 'Carnivore', 'Desert Burrows', 3, 'Female', 'Scorpions, Socializing', 'Sitting'),
    new Animal('Bullet Ant', 'Pantsy', 1, 'Herbivore', 'Rainforest', 0, 'Male', 'Stinging Intruders', 'Starvation'),
    new Animal('Western Chuckwalla', 'Tilda', 25, 'Omnivore', 'Rocky Desert', 3, 'Female', 'Being pot-bellied and baggy', 'Having a scientific name of obesus obesus')
  ];

  addAnimal(newAnimalfromChild: Animal) {
    this.masterAnimalList.push(newAnimalfromChild);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
    this.caretakerCheck = true;
    var total = 0;
    var age = 0;
    var counter = 0;
    this.masterAnimalList.forEach(function(currentAnimal) {
      total += currentAnimal.caretakers;
      age += currentAnimal.age;
      counter ++;
    })
    this.totalCaretakers = total;
    this.averageAge = (age/counter);
  }

  // refreshCaretakers() {
  //   console.log(this.masterAnimalList[3].caretakers);
  //   var total = 0;
  //   this.totalCaretakers = 0;
  //   this.masterAnimalList.forEach(function(currentAnimal) {
  //     total += parseInt(currentAnimal.caretakers);
  //     console.log(total);
  //     console.log(currentAnimal.caretakers);
  //   })
  //   this.totalCaretakers = total;
  // }

  ngOnInit() : void {
    var total = 0;
    var age = 0;
    var counter = 0;
    this.masterAnimalList.forEach(function(currentAnimal) {
      total += currentAnimal.caretakers;
      age += currentAnimal.age;
      counter ++;
    })
    this.totalCaretakers = total;
    this.averageAge = (age/counter);
  }

}
