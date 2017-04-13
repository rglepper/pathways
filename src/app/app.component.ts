import { Component, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  file: any;
  nodes: any = [];
  genes: any = [];
  selectedPath: object;

  onFileLoaded(event) {
    this.readJSON(event.target.files[0], (data) => {
      this.file = data;
      this.nodesList(data[1]);
      this.genesList(data[1]);
    });
  }

  readJSON(file, cb) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = JSON.parse(reader.result);
          cb(data);
        };
        reader.readAsText(file);
    }
  onPathClicked(event) {
    this.selectedPath = event;
  }
  nodesList(data) {
      this.nodes = _(data.nodes)
                  .groupBy('node_type')
                  .map((nodes, type) => ({'nodeType': type, 'size': nodes.length}))
                  .value();
  }
  genesList(data) {
      this.genes =  _(data.reactions)
                  .map(reaction => reaction.genes)
                  .flattenDeep()
                  .countBy('name')
                  .map((count, name) => ( count > 1 && name !== 'None' ? { name: name, count: count } : false))
                  .reject(o => !o)
                  .value();
  }
}
