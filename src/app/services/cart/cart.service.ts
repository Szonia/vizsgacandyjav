import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];


  addToCart(candy: any) {
    console.log("addToCart hívva");
    console.log("Ez Fut???????????????????");
    const existingItem = this.cart.find(item => item.key === candy.key);
    console.log("Létező elem a kosárban:", existingItem);

    if (existingItem) {
      existingItem.mennyiseg=candy.mennyiseg;
    } else {
      // Ha nincs quantity, beállítjuk 1-re
      
      this.cart.push(candy);
    }
  }

  getCartItems() {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(item => item.key !== productId);
  }


}
