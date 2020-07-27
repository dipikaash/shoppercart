import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopperCart';
  recipeVal: boolean;
  shopVal: boolean;
  onRecipeSelect(recipevalue: boolean) {
    this.recipeVal = recipevalue;
  }
  onShowShop(shopsValue: boolean) {
  this.shopVal = shopsValue;
  }
}
