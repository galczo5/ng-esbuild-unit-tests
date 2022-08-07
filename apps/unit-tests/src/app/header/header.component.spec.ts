import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {FilterService} from "../filter.service";
import {FilterInitialValueService} from "../filter-initial-value.service";
import {take} from "rxjs";

const initialValue = 'initial';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();

    const initialValueService = TestBed.inject(FilterInitialValueService);
    initialValueService.setInitialValue(initialValue);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial value', () => {
    const filterInitialValueService = TestBed.inject(FilterInitialValueService);
    const input = (fixture.nativeElement as HTMLElement).querySelector('#searchInput') as HTMLInputElement;
    expect(input.value).toEqual(filterInitialValueService.getInitialValue());
  });

  it('should set filter on button click', done => {
    const newValue = 'New value';
    const input = (fixture.nativeElement as HTMLElement).querySelector('#searchInput') as HTMLInputElement;
    const button = (fixture.nativeElement as HTMLElement).querySelector('#searchButton') as HTMLButtonElement;
    const filterService = TestBed.inject(FilterService);

    input.value = newValue;
    button.click();

    filterService.getFilter()
      .pipe(take(1))
      .subscribe(value => {
        expect(value).toEqual(newValue);
        done();
      });
  })
});
