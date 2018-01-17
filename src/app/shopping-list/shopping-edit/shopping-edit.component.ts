import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';

import { Component, ElementRef, EventEmitter, OnInit, Output, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') inGreForm:NgForm;

  arrSubscription=[];
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;



  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.arrSubscription.push(

      this.shoppingListService.startedEditing$.subscribe((id: number) => {
        this.editMode = true;
        this.editedItemIndex = id;

        this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);

        this.inGreForm.setValue({
          inGredientName: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      })

    );
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.inGredientName, form.value.amount);
    this.editMode 
    ? this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    : this.shoppingListService.addIngredient(newIngredient);

    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.inGreForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.arrSubscription.forEach((item) => {
      item.unsubscribe();
    })
  }

}
