import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(
    private router: Router,
    private customerService: CustomerService
    ) { }

  customers: any

  ngOnInit(): void {
    this.customerService.findAllCustomers().subscribe({
      next: (response) => {
        this.customers = response;
      }, error: (error) => {
        console.log(error);
      }
    });
  }


  getOrdersByCustomer(customer: any) {
    this.router.navigate(['orders', customer.id]);
  }
}