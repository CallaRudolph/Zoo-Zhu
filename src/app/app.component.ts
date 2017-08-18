import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to Zoo Zhu!!!';

  masterAnimalList: Animal[] = [
    new Animal('Flamingo', 'MuShu', 3, 'Omnivore', 'Lagoon', 2, 'Female', 'Standing on one leg', 'Being alone'),
    new Animal('Polar Bear', 'Salty', 13, 'Carnivore', 'Glacier', 4, 'Male', 'Eating the flesh of seals', 'Drunk bantering humans'),
    new Animal('Giraffe', 'Stalk', 1, 'Herbivore', 'Savanna', 6, 'Male', 'Open plains', 'Lions, Leopards, Hyenas'),
    new Animal('Meerkat', 'G-Unit', 2, 'Carnivore', 'Desert Burrows', 3, 'Female', 'Scorpions, Socializing', 'Sitting')
  ]
}
