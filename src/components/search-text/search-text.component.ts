import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css'],
})
export class SearchTextComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() searchValue: string = '';

  @Output() onSearch = new EventEmitter<string>();

  constructor() {}

  searchUpdate$ = new Subject<string>();

  ngOnInit() {
    this.searchUpdate$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.onSearch.emit(value as string);
      });
  }

  onValueChange(currentValue: string) {
    this.searchUpdate$.next(currentValue);
  }
}
