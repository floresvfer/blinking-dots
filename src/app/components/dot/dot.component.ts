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

  @Input()
  crl: number;

  @Input()
  color: number;

  constructor() {
  }

  ngOnInit() {
  }

  getClass() {
    return 'dot dot-' + this.dotSize + ' crl-' + this.crl + ' bck-' + this.color;
  }


  getStyle() {
    return {
      'margin-left': this.marginLeft + 'px',
      'margin-top': this.marginTop + 'px'
    };
  }
}
