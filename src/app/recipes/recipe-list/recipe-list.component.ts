import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../recipe.model';

import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  arrSubscription= [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    
    // Subscribe to get new recipes
    this.arrSubscription.push(
      this.recipeService.recipesChange$.subscribe((recipes:Recipe[]) => {
        debugger;
        console.log(1000);
        this.recipes = recipes;
      })
    )

    // Load Recipe List at the FirstTime
    this.recipeListInit();
  }

  recipeListInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.arrSubscription.forEach((item) => item.unsubscribe());
  }


}
