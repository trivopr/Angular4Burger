import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../services/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';

@Injectable()

export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService:RecipeService,
        private authService: AuthService
    ) {}

    // Get Token From Service
    

    urlFsRecipes = 'https://ng-recipe-book-ffff1.firebaseio.com/recipes.json';

    storeRecipes() {
        return this.http.put(this.urlFsRecipes, this.recipeService.getRecipes());
    }

    getFsRecipes() {
        let tk = this.authService.getToken();

        this.http.get(this.urlFsRecipes + '?auth=' + tk).subscribe((res: Recipe[]) => {
            this.recipeService.setFsRecipesToLocal(res);
            console.log('getFsRecipes:', res);
        })
    }

}