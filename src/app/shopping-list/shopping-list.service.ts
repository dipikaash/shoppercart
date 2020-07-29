import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10),
        new Ingredient('grapes', 50),
      ];
  getIngredients(){
      return this.ingredients.slice();
  }
  addIngredient = new EventEmitter<Ingredient>();
  addAllIngredients = new EventEmitter<Ingredient[]>();
}