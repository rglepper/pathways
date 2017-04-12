import { Component, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  file: any;
  nodes: any = [];

  onFileLoaded(event) {
    this.readJSON(event.target.files[0]);

  }

  readJSON(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.file = JSON.parse(reader.result);
          this.nodes = _.map(_.groupBy(this.file[1].nodes, 'node_type'), (nodes, type) => {
            return { 'nodeType': type, 'size': nodes.length };
          });
        };
        reader.readAsText(file);
    }
}
