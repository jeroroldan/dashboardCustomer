import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatBadgeModule, MatButtonModule],
  exports: [MatBadgeModule, MatButtonModule],
})
export class MaterialModule {}
