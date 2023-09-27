import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChoiceCardComponent } from './card/choice-card/choice-card.component';
import { ProductCardComponent } from './card/product-card/product-card.component';
import { ReviewCardComponent } from './card/review-card/review-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChoiceCardComponent,
    ProductCardComponent,
    ReviewCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
