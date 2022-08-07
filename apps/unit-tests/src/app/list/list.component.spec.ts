import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {FilterService} from "../filter.service";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ListItemComponent} from "../list-item/list-item.component";

@Injectable()
class MockFilterService extends FilterService {
  override getFilter(): Observable<string> {
    return of('');
  }

  override setFilter(value: string) {
    throw new Error('mock setFilter not implemented');
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent, ListItemComponent],
      providers: [
        { provide: FilterService, useClass: MockFilterService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items', () => {
    const item1 = 'Item 1';
    const item2 = 'Item 2';
    const item3 = 'Item 3';
    component.items = [item1, item2, item3];
    component.emitItems();
    fixture.changeDetectorRef.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(item1);
    expect(fixture.nativeElement.textContent).toContain(item2);
    expect(fixture.nativeElement.textContent).toContain(item3);
  });
});
