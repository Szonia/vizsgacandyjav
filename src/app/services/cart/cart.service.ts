import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  addToCart(candy: any) {
    console.log("addToCart hívva");
    const existingItem = this.cart.find(item => item.key === candy.key);

    if (existingItem) {
      existingItem.mennyiseg = candy.mennyiseg;
    } else {
      this.cart.push(candy);
    }

    this.saveCart(); 
  }

  getCartItems() {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * item.mennyiseg, 0);
  }

  removeFromCart(productKey: string) {
    console.log("Eltávolítás hívva, termék kulcs:", productKey);
    this.cart = this.cart.filter(item => item.key !== productKey);
    this.saveCart(); 
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }
}



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cart: any[] = [];


//   addToCart(candy: any) {
//     console.log("addToCart hívva");
//     console.log("Ez Fut???????????????????");
//     const existingItem = this.cart.find(item => item.key === candy.key);
//     console.log("Létező elem a kosárban:", existingItem);

//     if (existingItem) {
//       existingItem.mennyiseg=candy.mennyiseg;
//     } else {
//       // Ha nincs quantity, beállítjuk 1-re
      
//       this.cart.push(candy);
//     }
//   }

//   getCartItems() {
//     return this.cart;
//   }

//   getTotalPrice(): number {
//     return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   }

//   removeFromCart(productId: string) {
//     this.cart = this.cart.filter(item => item.key !== productId);
//   }

// }
