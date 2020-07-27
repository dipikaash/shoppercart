import { Component, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})

export class HeaderComponent {
 collapsed = true;
 @Output() recipe = new EventEmitter<boolean>();
 @Output() shop = new EventEmitter<boolean>();
 showRecipie: boolean = false;
 showShop: boolean = false;
 showRecipies(){
     this.showRecipie = !this.showRecipie; 
  this.recipe.emit(this.showRecipie);
 }
 showShops(){
  this.showShop = !this.showShop;
 this.shop.emit(this.showShop);
 }
}