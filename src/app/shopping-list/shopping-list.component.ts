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
  this.shoppingListService.addAllIngredients.subscribe(
    (ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    }
  );
}
onEdit(index:number) {
  this.shoppingListService.startEditting.emit(index);
}
  // onAddIngredient(thisIngredient: Ingredient){
  //   this.ingredients.push(thisIngredient);
  // }
  
}
