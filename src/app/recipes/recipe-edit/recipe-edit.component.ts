import { RecipeService } from "./../../services/recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "app/recipes/recipe.model";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  ingredients: FormArray;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  /**
   * Set Value for first Loading Form
   */
  private initForm() {
    let recipeName = "";
    let recipeDescription = "";
    let recipeImagePath = "";
    let recipeIngredients = [];

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount,
              [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': new FormArray(recipeIngredients)
    });
  }

  /**
   * Execute when Form is Submited
   */

   onSubmit() {
     if(this.editMode) {
        this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      } else {
        this.recipeService.addRecipe(this.recipeForm.value);
     }

     this.onCancel();
   }

   onCancel() {
     this.router.navigate(["../"], {relativeTo: this.route});
   }   

   onAddIngredient() {
     (<FormArray>this.recipeForm.get('ingredients')).push(
       new FormGroup({
         'name': new FormControl(''),
         'amount': new FormControl(''),
       })
     )
   }


  onDeleteIngredient(index) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }




}
