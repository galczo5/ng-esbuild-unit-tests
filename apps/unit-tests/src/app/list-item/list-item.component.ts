import {Component, Input} from '@angular/core';

@Component({
  selector: 'unit-tests-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {

  @Input()
  item = '';

}
