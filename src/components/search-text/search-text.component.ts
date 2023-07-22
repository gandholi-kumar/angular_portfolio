import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css'],
})
export class SearchTextComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() searchValue: string | number | null = '';

  @Output() onSearch = new EventEmitter<string | number | null>();

  private searchValue$: Subject<string | number | null> = new Subject<
    string | number | null
  >();
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit() {
    // this.searchValue$
    //   .pipe(
    //     startWith(this.searchValue),
    //     distinctUntilChanged(),
    //     takeUntil(this.onDestroy$)
    //   )
    //   .subscribe((val) => this.onSearch.emit(val));
  }

  onValueChange(currentValue: any) {
    if (this.searchValue$.asObservable.length === 0) {
      this.searchValue$
        .pipe(debounceTime(5000), distinctUntilChanged())
        .subscribe((filterQuery) => {
          this.onSearch.emit(filterQuery);
        });
    }
    this.searchValue$.next(currentValue);
  }
}
