import { Component, Input, Output, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import * as escher from 'escher-vis';
import * as $ from 'jquery';
import * as _ from 'lodash';

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

  @Output() path: EventEmitter<object> = new EventEmitter();

  ngAfterViewInit() {
    this.builder = escher.Builder(this.mapData, this.modelData, this.embeddedCss, this.pathwayEl.nativeElement, this.options);
    this.builder.selection.selectAll('.segment').on('click', (d) => {

      const fromNode = _.find(this.builder.map.nodes, ['node_id', d['from_node_id']]);
      const toNode = _.find(this.builder.map.nodes, ['node_id', d['to_node_id']]);
      const nodes = {
                      'fromNode': fromNode.name || fromNode.node_id,
                      'toNode': toNode.name || toNode.node_id
                    };
      this.path.emit(nodes);
    });
  }
  toggleStyles() {
    this.green = !this.green;
    this.builder.selection.selectAll('.segment').style('stroke', (d) => {
      return this.green ? 'green' : '#334E75';
    });
  }
}
