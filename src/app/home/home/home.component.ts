import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  name: string = "Luis Ernesto Ibarra";
  description: string = "Description about Luis, must be concise and remark the best qualities about you";

  constructor() {}

}
