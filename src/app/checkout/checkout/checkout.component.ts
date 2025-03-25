import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importáld a Router-t
import { CartService } from '../../services/cart/cart.service';
import { ProductlistService } from '../../productlist.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order: any = {};
  isSubmitting = false;
  successMessage: string | null = null;
  cart: any;

  constructor(private cartServ: CartService, private prodSer: ProductlistService, private router: Router) {
    this.cart = this.cartServ.getCartItems;
  }

  submitOrder(form: any) {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.successMessage = 'Rendelés sikeresen leadva!';
      this.order.cart = this.cart;
      console.log(this.order);

      this.prodSer.pushOrder(this.order);

      // rendelés leadása, és főoldalra navigálás
      setTimeout(() => {
        this.isSubmitting = false;
        form.resetForm();
        this.router.navigate(['/']);  // Visszairányít a főoldalra
      }, 500);
    }
  }
}




// import { Component } from '@angular/core';
// import { CartService } from '../../services/cart/cart.service';
// import { ProductlistService } from '../../productlist.service';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent {
//   order: any = {};
//   isSubmitting = false;
//   successMessage: string | null = null;
//   cart:any
//   constructor(private cartServ:CartService, private prodSer:ProductlistService){
//     this.cart=this.cartServ.getCartItems
//   }

//   submitOrder(form: any) {
    
//     if (form.valid && !this.isSubmitting) {
//       this.isSubmitting = true;
//       this.successMessage = 'Rendelés sikeresen leadva!';
//       this.order.cart=this.cart;
//       console.log(this.order)

//       this.prodSer.pushProduct(this.order)
//       // rendelés leadása, és főoldal
//       setTimeout(() => {
//         this.isSubmitting = false; 
//         form.resetForm(); 
//       }, 500);
//     }
//   }
// }



