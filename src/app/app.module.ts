import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    InterestCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
