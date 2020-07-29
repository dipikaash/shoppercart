import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput: ElementRef;
@ViewChild('amountInput') amountInput: ElementRef;
// @Output() addIngredient = new EventEmitter <Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
onAdd(){
const name: string = this.nameInput.nativeElement.value;
const amount: number = this.amountInput.nativeElement.value;
const newIngredient = new Ingredient(name, amount);
// this.addIngredient.emit(newIngredient);
this.shoppingListService.addIngredient.emit(newIngredient);
}
}
