import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1>Harry Potter List</h1>
    </header>
  `,
  styles: [`
    header {
      background-color: #f8f9fa;
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #e7e7e7;
    }
  `]
})
export class HeaderComponent {}