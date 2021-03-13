import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-playground',
  templateUrl: './angular-playground.component.html',
  styleUrls: ['./angular-playground.component.css'],
})
export class AngularPlaygroundComponent implements OnInit {
  showed: boolean = false;
  countingClicked: number = 0;
  clickCounted: Array<number> = [];
  constructor() {}

  display() {
    this.showed = !this.showed;
    this.clickCounted.push(++this.countingClicked);
  }

  ngOnInit(): void {}
}
