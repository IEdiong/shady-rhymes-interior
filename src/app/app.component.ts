import { Component, OnInit } from '@angular/core';
import { choices } from 'src/data/source';
import { IChoice } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  choices!: IChoice[];

  ngOnInit(): void {
    this.choices = choices;
  }
}
