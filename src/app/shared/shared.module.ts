import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomFooterComponent
  ],
  exports: [
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }