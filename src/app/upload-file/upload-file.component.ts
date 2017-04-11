import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html'
})
export class UploadFileComponent {
  @Output() onFileLoaded = new EventEmitter<object>();
  fileName: string;
  constructor() {
  }

  fileChanged(event) {
    this.fileName = event.target.files[0].name;
    this.onFileLoaded.emit(event);
  }
}
