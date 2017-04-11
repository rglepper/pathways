import { Component, Input,ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as escher from 'escher-vis';
import * as $ from 'jquery';

@Component({
  selector: 'app-escher',
  templateUrl: './escher.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../node_modules/escher-vis/css/dist/builder.css' // this why you import css as string
  ],
})
export class EscherComponent implements AfterViewInit {
@ViewChild('pathway') pathwayEl: ElementRef;

  @Input() mapData: object;
  @Input() modelData: object = null;
  @Input() embeddedCss: string = null;
  @Input() options: object = { menu: 'zoom', fill_screen: true };

  ngAfterViewInit() {
    escher.Builder(this.mapData, this.modelData, this.embeddedCss, this.pathwayEl.nativeElement, this.options);
  }

}
