import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { Product } from '../product';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-card',
  imports: [
    UpperCasePipe,
    DatePipe,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatIcon
  ],
  template: `
    <mat-card appearance="outlined" class="product-card">
      <mat-card-header>
        <mat-card-title>{{ product.name | uppercase }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>{{ product.createdDate | date }}</p>
        <p *ngIf="product.isFavorite"><b>Favorite product</b></p>
        <p *ngIf="!product.isFavorite">Simple product</p>
      </mat-card-content>
      <mat-card-actions>
        <mat-icon (click)="switchfav()" class="favorite-icon">
          {{ product.isFavorite ? 'favorite' : 'favorite_border' }}
        </mat-icon>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .product-card {
      margin: 5px;
      padding: 10px;
      border: 1px solid #ccc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
      width: 200px;
    }
    .product-card:hover {
      transform: scale(1.02);
    }
    mat-card-header {
      background-color: #f5f5f5;
    }
    mat-card-title {
      font-size: 1.2em;
      font-weight: bold;
    }
    mat-card-content p {
      margin: 0;
      font-size: 1em;
    }
    .favorite-icon {
      font-size: 24px;
      color: red;
      cursor: pointer;
    }
  `]
})
export class ProductCardComponent {
  @Input({ required: true }) product: Product = { id: 0, name: '', isFavorite: false, createdDate: new Date() };
  @Output() addItemEvent = new EventEmitter<number>();
  productService = inject(ProductService);

  switchfav() {
    this.productService.switchFav(this.product);
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }
}