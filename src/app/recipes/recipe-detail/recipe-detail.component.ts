import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 selectedRecipe: Recipe;
 id: number;
  constructor(private shoppingListService: ShoppingListService,
             private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
         this.id = +params['id'];
         this.selectedRecipe = this.recipeService.getSelectedRecipes(this.id);
      }
    );
  }
  addShoppingList() {
 this.shoppingListService.addIngredients(this.selectedRecipe.ingredient);
  }
  editRecipe() {
    this.router.navigate(['edit'],{relativeTo: this.route});
 // this.router.navigate(['../','this.id','edit'],{relativeTo: this.route});
  }
}
