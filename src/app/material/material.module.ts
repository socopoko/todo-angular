import { NgModule } from '@angular/core';

// Anugular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

const MaterialComponents = [
  MatToolbarModule,
  MatListModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
