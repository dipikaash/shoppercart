import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

// @Output() addIngredient = new EventEmitter <Ingredient>();
@ViewChild('f') slForm: NgForm; 
editMode = false;
 editingIndex: number;
 editIngredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.startEditting.subscribe(
     (index: number) => {
       this.editMode = true;
       this.editingIndex = index;
       this.editIngredient = this.shoppingListService.getSelectedIngredient(index);
       this.slForm.setValue({
         name: this.editIngredient.name,
         amount: this.editIngredient.amount
       });    
      }
   );
  }
onAdd(form: NgForm){
const value = form.value;
const newIngredient = new Ingredient(value.name, value.amount);
// this.addIngredient.emit(newIngredient);
if (this.editMode){
  this.shoppingListService.updateIngredient(this.editingIndex,newIngredient);
} else {
  this.shoppingListService.addOneIngredient(newIngredient);
}

}
 
onClear(){
  this.slForm.reset();
  this.editMode = false;
}
onDelete(){
  this.shoppingListService.deleteIngredient(this.editingIndex);
  this.onClear();
}
}
