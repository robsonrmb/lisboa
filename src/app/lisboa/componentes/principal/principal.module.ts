import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PrincipalModule { }
