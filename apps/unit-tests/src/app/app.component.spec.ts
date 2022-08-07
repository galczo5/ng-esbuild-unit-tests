import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {CreateFormComponent} from "./create-form/create-form.component";
import {ListComponent} from "./list/list.component";
import {ListItemComponent} from "./list-item/list-item.component";
import {FilterService} from "./filter.service";
import {FilterInitialValueService} from "./filter-initial-value.service";
import {ItemsService} from "./items.service";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        CreateFormComponent,
        ListComponent,
        ListItemComponent
      ],
      providers: [
        FilterService,
        FilterInitialValueService,
        ItemsService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
