import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AnimalAgePipe } from './animal-age.pipe';
import { CaretakerTotalComponent } from './caretaker-total/caretaker-total.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    NewAnimalComponent,
    EditAnimalComponent,
    AnimalAgePipe,
    CaretakerTotalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
