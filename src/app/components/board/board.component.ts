import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input()
  elements: number;

  @Input()
  widthPercent: number;

  @Input()
  heightPercent: number;

  @Input()
  margin: number;

  divs: Array<{
    left: number;
    top: number;
    type: number;
    crl: number;
  }> = [];
  innerWidth: number;
  innerHeight: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getSize();
  }

  getSize() {
    this.innerWidth = this.el.nativeElement.offsetWidth;
    this.innerHeight = this.el.nativeElement.offsetHeight;
  }

  ngOnInit() {
    this.getSize();
    const margin = this.innerWidth * (this.margin / 100);
    for (let i = 0; i < this.elements; i++) {
      let left = Math.floor(Math.random() * (this.innerWidth - margin));
      left = left < margin ? margin : left;
      let top = Math.floor(Math.random() * (this.innerHeight - margin));
      top = top < margin ? margin : top;
      const type = Math.floor(Math.random() * (6 - 1)) + 1;
      const crl = Math.floor(Math.random() * (6 - 1)) + 1;
      this.divs
        .push(
          {
            left,
            top,
            type,
            crl
          }
        );
    }
  }

}
