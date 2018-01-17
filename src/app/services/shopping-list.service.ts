import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient [] = [
    new Ingredient('apple', 5),
    new Ingredient('orange', 3),
    new Ingredient('pineaple', 15)
  ];

  notifyIngredientChange = new Subject<Ingredient[]>();
  startedEditing$ = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient]
    this.notifyIngredientChange.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.notifyIngredientChange.next(this.ingredients);
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.notifyIngredientChange.next(this.ingredients);
  }  
}
