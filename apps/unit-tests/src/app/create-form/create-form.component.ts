import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'unit-tests-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent {

  @ViewChild('inputElement', {read: ElementRef})
  inputElement?: ElementRef;

  @Output()
  itemCreated: EventEmitter<string> = new EventEmitter<string>();

  createItem(value: string): void {
    if (!value) {
      return;
    }

    if (this.inputElement) {
      (this.inputElement.nativeElement as HTMLInputElement).value = '';
    }

    this.itemCreated.emit(value);
  }
}
