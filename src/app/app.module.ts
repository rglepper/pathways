import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MdToolbarModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { EscherComponent } from './escher/escher.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [
    AppComponent,
    EscherComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
