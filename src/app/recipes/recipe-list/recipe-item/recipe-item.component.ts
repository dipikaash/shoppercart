import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
@Input() recipeItem: Recipe;
@Output() recipeSelected = new EventEmitter<Recipe>();
  ngOnInit(): void {
  }
  recipeSelect() {
 this.recipeSelected.emit(this.recipeItem);
  }
}
