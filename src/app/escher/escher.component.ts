import { Component, Input, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as escher from 'escher-vis';
import * as $ from 'jquery';

@Component({
  selector: 'app-escher',
  templateUrl: './escher.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../node_modules/escher-vis/css/dist/builder.css',
    './escher.component.css'
  ]
})
export class EscherComponent implements AfterViewInit {
@ViewChild('pathway') pathwayEl: ElementRef;
builder;
green = false;
selection: any;
  @Input() mapData: object;
  @Input() modelData: object = null;
  @Input() embeddedCss: string = null;
  @Input() options: object = {
    menu: 'zoom',
    fill_screen: false
    };

  ngAfterViewInit() {
    this.builder = escher.Builder(this.mapData, this.modelData, this.embeddedCss, this.pathwayEl.nativeElement, this.options);
  }
  toggleStyles() {
    this.green = !this.green;
    this.builder.selection.selectAll('.segment').style('stroke', (d) => {
      return this.green ? 'green' : '#334E75';
    });
  }
}
