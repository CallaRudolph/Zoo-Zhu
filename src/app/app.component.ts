import { Component, OnInit } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to Zoo Zhu!!!';
  selectedAnimal = null;
  totalCaretakers = 0;

  masterAnimalList: Animal[] = [
    new Animal('Flamingo', 'MuShu', 3, 'Omnivore', 'Lagoon', 2, 'Female', 'Standing on one leg', 'Being alone'),
    new Animal('Polar Bear', 'Salty', 13, 'Carnivore', 'Glacier', 4, 'Male', 'Eating the flesh of seals', 'Drunk bantering humans'),
    new Animal('Giraffe', 'Stalk', 1, 'Herbivore', 'Savanna', 6, 'Male', 'Open plains', 'Lions, Leopards, Hyenas'),
    new Animal('Meerkat', 'G-Unit', 2, 'Carnivore', 'Desert Burrows', 3, 'Female', 'Scorpions, Socializing', 'Sitting')
  ];

  addAnimal(newAnimalfromChild: Animal) {
    this.masterAnimalList.push(newAnimalfromChild);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
    // this.caretakerCheck = true;
    // var total = 0;
    // this.masterAnimalList.forEach(function(currentAnimal) {
    //   total += currentAnimal.caretakers;
    // })
    // this.totalCaretakers = total;
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
    this.masterAnimalList.forEach(function(currentAnimal) {
      total += currentAnimal.caretakers;
    })
    this.totalCaretakers = total;
  }

}
