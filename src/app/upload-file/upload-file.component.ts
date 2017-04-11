import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html'
})
export class UploadFileComponent {
  @ViewChild('fileInput') myFileInput: ElementRef;
  @Output() onFileLoaded = new EventEmitter<object>();

  constructor() {
  }

  fileChanged(event) {
    this.onFileLoaded.emit(event);
  }
}
