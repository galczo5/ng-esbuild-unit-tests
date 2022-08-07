import { Injectable } from '@angular/core';
import {distinctUntilChanged, Observable, ReplaySubject} from "rxjs";
import {FilterInitialValueService} from "./filter-initial-value.service";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private readonly stream$: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor(private readonly filterInitialValueService: FilterInitialValueService) {
    this.stream$.next(filterInitialValueService.getInitialValue());
  }

  setFilter(value: string): void {
    this.filterInitialValueService.setInitialValue(value);
    this.stream$.next(value);
  }

  getFilter(): Observable<string> {
    return this.stream$.pipe(distinctUntilChanged())
  }
}
