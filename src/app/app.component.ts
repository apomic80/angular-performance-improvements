import { Component } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  text: string;
  items = List<{label: string, value: number}>();

  addTextToList() {
    const randomValue =  Math.floor(Math.random() * 10) + 1;
    this.items = this.items.unshift({ label: this.text, value: randomValue });
  }
}
