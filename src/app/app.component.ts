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
          this.nodes = _(this.file[1].nodes)
                      .groupBy('node_type')
                      .map((nodes, type) => ({'nodeType': type, 'size': nodes.length}))
                      .value();
        };
        reader.readAsText(file);
    }
}
