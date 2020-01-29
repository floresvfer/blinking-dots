import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  divs: Array<{
    left: number;
    top: number;
    type: number;
  }> = [];
  innerWidth: number;
  innerHeight: number;

  constructor() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    for (let i = 0; i < 100; i++) {
      const left = Math.floor(Math.random() * (innerWidth - 60));
      const top = Math.floor(Math.random() * (innerHeight - 60));
      const type = Math.floor(Math.random() * (6 - 1)) + 1;
      this.divs
        .push(
          {
            left,
            top,
            type
          }
        );
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
