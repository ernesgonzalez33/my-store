import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Output() bought = new EventEmitter;

  name: string = '';
  address: string = '';
  card: number = 0;
  email: string = '';
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("Thanks for buying with us!");
    this.submitted = true;
    this.bought.emit();
  }

}
