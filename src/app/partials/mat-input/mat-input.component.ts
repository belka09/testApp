import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.scss']
})
export class MatInputComponent implements OnInit{

  public testPrice: number;
  public currencyChange: Subject<number> = new Subject<number>();

  @Output() valChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.currencyChange
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(newText => {
        this.testPrice = newText;
        this.valChange.emit(this.testPrice);
      });
  }
}
