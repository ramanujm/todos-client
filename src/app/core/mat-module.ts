import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
    imports: [CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule],
  exports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule],
})

export class MaterialModule {

}
