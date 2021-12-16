import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';

const routes: Routes = [
  {path: "tip-calculator", component: TipCalculatorComponent},
  {path: "interest-calculator", component: InterestCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
