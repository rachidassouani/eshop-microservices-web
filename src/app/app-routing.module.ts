import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  }, 
  {
    path: 'customers', component: CustomersComponent
  },
  {
    path: 'orders/:customerId', component: OrdersComponent
  },
  {
    path: 'orders/order-detail/:orderId', component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
