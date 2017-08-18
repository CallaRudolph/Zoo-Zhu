## Planning

1. Configuration/dependencies
  * Angular CLI
  * Bower
  * Bootstrap
2. Specs
  * It will contain one model: Animal, with the following attributes (with data types):
    * Species (string), Name (string), Age (number), Diet (string), Location (string), Caretakers (number), Sex (string), Likes (string), Dislikes (string)
  * The app will hold several hard-coded animals
  * The user can submit a form to add newly-admitted animals with their corresponding attributes
  * The user can view a list of all animals
  * The user can select from a drop-down menu to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older)
  * The user can click on a specific animal to edit its name, age, or caretakers
3. Integration
  * It will contain one route on the index.html: the main app-root to app.component.ts
  * The app-root will contain these additional components:
    * animal-list to display all animals
    * new-animal to add a new animal
    * edit-animal to edit a selected animal
  * The animal-list component will contain a pipe to view animals based on their age from animal-age.pipe.ts
4. UX/UI
  * Nav-bar will be used to display zoo name and a picture
  * Develop custom style with bootstrap and flex-box
5. Polish
  * Develop README with functionality to include in the future, given the opportunity
  * Consider adding additional features, such as:
    * a new pipe to show animals based on diet type
    * display total number of caretakers needed in a day
