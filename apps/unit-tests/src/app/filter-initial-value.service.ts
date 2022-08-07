import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterInitialValueService {

  private static readonly LS_KEY = 'filter';

  // Should mock localStorage, but I'm lazy
  private lastValue = '';

  getInitialValue(): string {
    return this.lastValue || localStorage.getItem(FilterInitialValueService.LS_KEY) || '';
  }

  setInitialValue(value: string): void {
    this.lastValue = value;
    localStorage.setItem(FilterInitialValueService.LS_KEY, value);
  }
}
