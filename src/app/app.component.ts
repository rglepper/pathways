import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  file: any;

  onFileLoaded(event) {
    this.readJSON(event.target.files[0]);
  }

  readJSON(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.file = JSON.parse(reader.result);
        };
        reader.readAsText(file);

    }
}
