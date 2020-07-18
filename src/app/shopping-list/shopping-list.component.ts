import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10),
    new Ingredient('grapes', 50),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
