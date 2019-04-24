import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleListComponent {

  @Input()
  items = List<{label: string, value: number}>();

}
