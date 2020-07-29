import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
@Input() recipeItem: Recipe;
// @Output() recipeSelected = new EventEmitter<Recipe>();
  ngOnInit(): void {
  }
  recipeSelect() {
 // this.recipeSelected.emit(this.recipeItem);
 this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
