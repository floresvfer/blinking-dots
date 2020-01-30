import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0 }),
            animate('1s ease-out')
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
export class HomeComponent implements OnInit {
  rowHeight: number;
  colsNo: number;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private el: ElementRef) {
    this.rowHeight = window.innerHeight * 0.33;
    this.colsNo = 3;
  }

  ngOnInit() {
  }

  goTo(number: number) {
    location.href = '#/mind';
  }
}
