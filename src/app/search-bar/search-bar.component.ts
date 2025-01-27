import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <input type="text" placeholder="Search products..." (input)="onSearch($event)" />
  `,
  styles: [`
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      box-sizing: border-box;
    }
  `]
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value);
  }
}