import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  findAllOrdersByCustomerId(customerId: number) {
    return this.httpClient.get(`http://localhost:8888/bills/customers/${customerId}`);
  }


  findAllOrdersById(orderId: number) {
    return this.httpClient.get(`http://localhost:8888/bills/${orderId}`);
  }
}
