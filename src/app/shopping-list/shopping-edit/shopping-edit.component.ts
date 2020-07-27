import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput: ElementRef;
@ViewChild('amountInput') amountInput: ElementRef;
@Output() addIngredient = new EventEmitter <Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
onAdd(){
const name: string = this.nameInput.nativeElement.value;
const amount: number = this.amountInput.nativeElement.value;
const newIngredient = new Ingredient(name, amount);
this.addIngredient.emit(newIngredient);
}
}
