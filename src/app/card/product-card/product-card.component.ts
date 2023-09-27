import { Component, Input } from '@angular/core';

@Component({
  selector: 'shad-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() image!: string;
}
