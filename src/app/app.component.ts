import { RecipeService } from './services/recipe.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  constructor() {

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCmLjB8oShrfq9FwlxGtEgtbEW1t_z9A6Y",
      authDomain: "ng-recipe-book-ffff1.firebaseapp.com"      
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
