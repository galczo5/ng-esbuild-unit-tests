import {ChangeDetectorRef, Component} from '@angular/core';
import {ItemsService} from "./items.service";

@Component({
  selector: 'unit-tests-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private readonly itemsService: ItemsService,
              private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  itemCreated(item: string): void {
    this.itemsService.addItem(item);
    this.changeDetectorRef.detectChanges();
  }

  getItems(): Array<string> {
    return [...this.itemsService.getItems()];
  }
}
