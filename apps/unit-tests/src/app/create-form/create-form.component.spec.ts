import {TestBed} from '@angular/core/testing';

import {CreateFormComponent} from './create-form.component';
import {take} from "rxjs";

const numberOfIterations = 10000

describe('CreateFormComponent', () => {

    it('TestBed - should emit value if value is not empty', async () => {
      for (let i = 0; i < numberOfIterations; i++) {
        await TestBed.configureTestingModule({ declarations: [CreateFormComponent] }).compileComponents();
        const fixture = TestBed.createComponent(CreateFormComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();

        const value = 'Test';

        const promise = component.itemCreated
          .pipe(take(1))
          .toPromise();

        component.createItem(value);

        const result = await promise;
        expect(result).toEqual(value);
        await TestBed.resetTestingModule();
      }
    });

    it('No TestBed - should emit value if value is not empty', async () => {
      for (let i = 0; i < numberOfIterations; i++) {
        const component = new CreateFormComponent();
        const value = 'Test';
        const promise = component.itemCreated
          .pipe(take(1))
          .toPromise();

        component.createItem(value);

        const result = await promise;
        expect(result).toEqual(value);
      }
    });

});
