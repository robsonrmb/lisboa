import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site.component';

@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteComponent
  ]
})
export class SiteModule { }
