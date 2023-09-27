import { Component, OnInit } from '@angular/core';
import { choices, productsImg, testimonials } from 'src/data/source';
import { IChoice, IProductImage, IReviewCard } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  choices!: IChoice[];
  productImages!: IProductImage[];
  reviewCards!: IReviewCard[];

  ngOnInit(): void {
    this.choices = choices;
    this.productImages = productsImg;
    this.reviewCards = testimonials;
  }
}
