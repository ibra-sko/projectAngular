import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>&copy; 2023 My Application</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f8f9fa;
      padding: 10px;
      text-align: center;
      border-top: 1px solid #e7e7e7;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  `]
})
export class FooterComponent {}