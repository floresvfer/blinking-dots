import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {
  @Input()
  dotSize: number;

  @Input()
  marginLeft: number;

  @Input()
  marginTop: number;

  constructor() {
  }

  ngOnInit() {
  }

  getClass() {
    return this.dotSize > 5 ? 'dot dot-1' : 'dot dot-' + this.dotSize;
  }

  getStyle() {
    return {
      'margin-left': this.marginLeft + 'px',
      'margin-top': this.marginTop + 'px'
    };
  }
}
