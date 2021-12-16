import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss']
})
export class TipCalculatorComponent implements OnInit {

  constructor() { }

  // declare variables
  percentages: number[] = [10, 15, 20, 25];
  billAmount: any = '';
  selectedOption: any = '';
  showTipAmount: any = '';
  showBill: any = '';
  billComplete: boolean = false;

  // calculate the final bill with tip 
  calculate(){

    if(this.billAmount === '' && this.selectedOption === ''){
      alert("enter valid bill & tip amount");
    } else {
      let bill = parseInt(this.billAmount);
      let tip = parseInt(this.selectedOption) / 100;
      let tipAmount = bill * tip;
      let finalBill = bill + tipAmount;
      
      this.showTipAmount = tipAmount
      this.showBill = finalBill;
      
      this.billComplete = !this.billComplete;
    }
  }

  // clear the input, select and final bill fields + reset the final bill div
  clear(){
    this.billAmount = '';
    this.selectedOption ='';
    this.showBill= '';
    this.billComplete = false;
  }

  ngOnInit(): void {
  }

}
