import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  exports: [
      CommonModule,
      MatTableModule,
      MatButtonModule,
      MatPaginatorModule,
      MatSortModule,
      MatIconModule,
      MatInputModule,
      MatCardModule,
      MatFormFieldModule,
      MatDividerModule,
      MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
