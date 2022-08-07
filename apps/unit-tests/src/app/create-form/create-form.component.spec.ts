import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormComponent } from './create-form.component';
import {take} from "rxjs";

describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value if value is not empty', done => {
    const value = 'Test';

    component.itemCreated
      .pipe(take(1))
      .subscribe(v => {
        expect(v).toEqual(value);
        done();
      });

    component.createItem(value);
  });

  it('should not emit value if value is empty', () => {
    const value = '';
    let valueEmitted = false

    component.itemCreated
      .pipe(take(1))
      .subscribe(() => valueEmitted = true);

    component.createItem(value);
    expect(valueEmitted).toBeFalsy();
  });
});
