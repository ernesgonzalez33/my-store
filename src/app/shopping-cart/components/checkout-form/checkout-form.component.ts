import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  name: string = '';
  address: string = '';
  card: number = 0;
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("Thanks for buying with us!");
  }

}
