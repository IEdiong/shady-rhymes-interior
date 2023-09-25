import { Component, Input } from '@angular/core';
import { IChoice } from 'src/types';

@Component({
  selector: 'shad-choice-card',
  templateUrl: './choice-card.component.html',
  styleUrls: ['./choice-card.component.scss'],
})
export class ChoiceCardComponent {
  @Input() choice!: IChoice;
}
