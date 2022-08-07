import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from "../filter.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'unit-tests-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  filterValue = '';

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly filterService: FilterService) {
  }

  ngOnInit(): void {
    this.filterService.getFilter()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.filterValue = value;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setFilter(value: string): void {
    this.filterService.setFilter(value);
  }
}
