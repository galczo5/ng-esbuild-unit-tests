import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FilterService} from "../filter.service";
import {combineLatest, distinctUntilChanged, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'unit-tests-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnChanges, OnInit, OnDestroy {

  @Input()
  items: Array<string> = [];

  filteredItems: Array<string> = [];

  private readonly destroy$: Subject<void> = new Subject<void>();
  private readonly items$: Subject<Array<string>> = new Subject<Array<string>>();

  constructor(private readonly filterService: FilterService) {
  }

  ngOnInit(): void {

    combineLatest([
      this.filterService.getFilter().pipe(distinctUntilChanged()),
      this.items$
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([filter, items]) => {
        this.filteredItems = items.filter(i =>
          !filter ||
          i.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
      });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.emitItems()
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  emitItems(): void {
    this.items$.next(this.items);
  }
}
