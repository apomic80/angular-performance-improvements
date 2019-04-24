import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleListComponent } from './sample-list/sample-list.component';
import { FibonacciPipe } from './sample-list/fibonacci.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SampleListComponent,
    FibonacciPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
