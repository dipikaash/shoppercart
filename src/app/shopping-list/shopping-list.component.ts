import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[];
  constructor(
    private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
 this.ingredients = this.shoppingListService.getIngredients();
this.shoppingListService.addIngredient.subscribe(
  (ingredient: Ingredient)=> {
    this.ingredients.push(ingredient);
  });  
  this.shoppingListService.addAllIngredients.subscribe(
    (ingredient: Ingredient[]) => {
      for(let i=0;i<ingredient.length;i++)
      {
        this.ingredients.push(ingredient[i]);
      }
    }
  )
}
  // onAddIngredient(thisIngredient: Ingredient){
  //   this.ingredients.push(thisIngredient);
  // }
  
}
