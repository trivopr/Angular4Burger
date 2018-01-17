import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from 'app/shared/shared.module';
import { RecipesModule } from 'app/recipes/recipes.module';

import { AuthModule } from 'app/auth/auth.module';
import { ShoppingListModule } from 'app/shopping-list/shopping-list.module';
import { CoreModule } from 'app/core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
