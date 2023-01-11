import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordeService: OrderService) { }

  orderDetail: any;
  orderId!:number;

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['orderId'];
    this.ordeService.findAllOrdersById(this.orderId).subscribe({
      next: (response) => {
        this.orderDetail = response;
      }, error: (error) => {
        console.log(error);
      }
    })
  }
}