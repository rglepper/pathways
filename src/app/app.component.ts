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
          this.genes = _(this.file[1].reactions)
                      .map(reaction => reaction.genes)
                      .flattenDeep()
                      .countBy('name')
                      .map((count, name) => ( count > 1 ? { name: name, count: count } : false))
                      .reject(o => !o)
                      .value();

        };
        reader.readAsText(file);
    }
  onPathClicked(event) {
    console.log(this.file);
   const fromNode = _.find(this.file[1].nodes, ['node_id', event['from_node_id']]);
   const toNode = _.find(this.file[1].nodes, ['node_id', event['to_node_id']]);

    this.selectedPath = {
      'fromNode': fromNode.name || fromNode.node_id ,
      'toNode': toNode.name || toNode.node_id
    };

  }
}
