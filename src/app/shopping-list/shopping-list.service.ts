import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10),
        new Ingredient('grapes', 50),
      ];
  getIngredients(){
      return this.ingredients.slice();
  }
//  addIngredient = new EventEmitter<Ingredient>();
  addAllIngredients = new EventEmitter<Ingredient[]>();
  startEditting = new EventEmitter<number>();

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.addAllIngredients.emit(this.ingredients.slice());
  }

  getSelectedIngredient(index: number) {
    return this.ingredients[index];
  }
  addOneIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addAllIngredients.emit(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.addAllIngredients.emit(this.ingredients.slice());
  }
  deleteIngredient(index:number) {
    this.ingredients.splice(index,1);
    this.addAllIngredients.emit(this.ingredients.slice());
  }
}