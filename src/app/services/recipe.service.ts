import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './../recipes/recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe(
      0,
      'Name 0 of Recipe',
      'Description of Recipe',
      'assets/img1.jpg',
      [
        new Ingredient('Meet', 100),
        new Ingredient('French Fires', 20)
      ]
    ),
    new Recipe(
      1,
      'Name 1 of Recipe',
      'Description 2 of Recipe',
      'assets/img2.jpg',
      [
        new Ingredient('Bacon', 200),
        new Ingredient('Lemon', 2)
      ]
    ),
    new Recipe(
      2,
      'Name 2 of Recipe',
      'Description 2 of Recipe',
      'assets/img1.jpg',
      [
        new Ingredient('Bacon', 200),
        new Ingredient('Lemon', 2)
      ]
    ),
    new Recipe(
      3,
      'Name 3 of Recipe',
      'Description 3 of Recipe',
      'assets/img2.jpg',
      [
        new Ingredient('Chicken Meet', 200),
        new Ingredient('Oil', 30)
      ]
    )
  ];

  recipesChange$ = new Subject<Recipe[]>();


  constructor(private shoppingListService: ShoppingListService) {
  }

  setFsRecipesToLocal(fsData: Recipe[]) {
    const recipes = fsData;
    this.recipesChange$.next(recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes = [...this.recipes, recipe];
    this.recipesChange$.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes = [
      ...this.recipes.slice(0, index),
      newRecipe,
      ...this.recipes.slice(index+1)
    ]

    this.recipesChange$.next(this.recipes);
  }


  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChange$.next(this.recipes);
  }

}
