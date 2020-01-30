import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-mind',
  templateUrl: './mind.component.html',
  styleUrls: ['./mind.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0 }),
            animate('1.5s ease-out')
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1 }),
            animate('1s ease-in')
          ]
        )
      ]
    )
  ]
})

export class MindComponent implements OnInit {
  viewMind = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.viewMind = true;
    }, 1000);
  }

}
