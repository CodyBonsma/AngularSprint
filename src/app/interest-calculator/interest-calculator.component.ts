import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.scss']
})
export class InterestCalculatorComponent implements OnInit {

  startingPrincipal: number = 0;
  annualAddition: number = 0;
  yearsToGrow: number = 0;
  interstRate: number = 0;
  compoundTimes: number = 0;
  futureValue: number = 0;
  isRed: boolean = true;
  isGreen: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  calculateInterest() {
    this.futureValue = Math.round (this.startingPrincipal * (Math.pow(1 + (this.interstRate / 100) / this.compoundTimes, this.yearsToGrow * this.compoundTimes)) * 100) / 100
    console.log(typeof this.futureValue)
  }

  clearVariables() {
    this.startingPrincipal = 0
    this.annualAddition= 0;
    this.yearsToGrow = 0;
    this.interstRate = 0;
    this.compoundTimes = 0;
    this.futureValue = 0;
  }
  switchColors() {
    this.isGreen = !this.isGreen;
    this.isRed = !this.isRed;
    console.log(this.isGreen, this.isRed)
  }
}
