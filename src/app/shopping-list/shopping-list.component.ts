import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './../services/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient [];
  private subscribtion: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }


  ngOnInit() {
    console.log('Shopping List Module');
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscribtion = this.shoppingListService.notifyIngredientChange.subscribe((data) => {
      this.ingredients = data;
    });
  }


  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onEditItem(id: number) {
    this.shoppingListService.startedEditing$.next(id);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
