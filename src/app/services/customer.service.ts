import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  customers: any;



  findAllCustomers() {
    return this.httpClient.get('http://localhost:8888/customers');
  }
}
