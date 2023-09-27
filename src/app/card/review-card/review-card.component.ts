import { Component, Input } from '@angular/core';
import { IReviewCard } from 'src/types';

@Component({
  selector: 'shad-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input() review!: IReviewCard;
}
