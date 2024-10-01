import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { CvComponent } from './cv/cv/cv.component';
import { MasterDetailCvComponent } from './cv/master-detail-cv/master-detail-cv.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { AutocompleteComponent } from './cv/autocomplete/autocomplete.component';
import { ListcvsComponent } from './cv/listcvs/listcvs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { IsEvenComponent } from './components/is-even/is-even.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { SecondComponent } from './components/second/second.component';
import { TwoComponent } from './components/two/two.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCvComponent,
    CvCardComponent,
    CvComponent,
    MasterDetailCvComponent,
    EmbaucheComponent,
    CvItemComponent,
    AutocompleteComponent,
    ListcvsComponent,
    WeekTodoComponent,
    TodoComponent,
    ColorComponent,
    FilsComponent,
    PereComponent,
    IsEvenComponent,
    NavbarComponent,
    RotatingCardComponent,
    SecondComponent,
    TwoComponent,
    MiniWordComponent,
    DetailsCvComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
