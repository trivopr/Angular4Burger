import { SharedModule } from 'app/shared/shared.module';

import { NgModule } from '@angular/core';
import { HeaderComponent } from 'app/core/header/header.component';
import { HomeComponent } from 'app/core/home/home.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { ShoppingListService } from 'app/services/shopping-list.service';
import { RecipeService } from 'app/services/recipe.service';
import { DataStorageService } from 'app/shared/data-storage.service';
import { AuthService } from 'app/auth/auth.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService
    ],
    exports: [
        HeaderComponent,
        AppRoutingModule
    ]
})

export class CoreModule {}