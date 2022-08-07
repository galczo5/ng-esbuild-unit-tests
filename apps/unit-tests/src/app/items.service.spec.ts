import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item', () => {
    const item = 'item';
    service.addItem(item);
    expect(service.getItems().length).toEqual(1);
    expect(service.getItems()[0]).toEqual(item);
  })
});
