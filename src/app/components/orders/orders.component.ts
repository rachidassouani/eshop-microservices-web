import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService) { }


  customerId!: number;
  orders: any;
  orderId!:number;

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];
    this.orderService.findAllOrdersByCustomerId(this.customerId).subscribe({
      next: (response) => {
        this.orders = response;
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  getOrderDetails(order: any) {
    this.router.navigate(['orders', 'order-detail', order.id]);
  }
}