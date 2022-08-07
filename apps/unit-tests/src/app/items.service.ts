import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Array<string> = [];

  getItems(): Array<string> {
    return this.items;
  }

  addItem(item: string): void {
    this.items.push(item);
  }
}
