import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivacyComponent} from './privacy.component';
import {PrivacyRoutingModule} from './privacy-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    PrivacyComponent,
  ]
})
export class PrivacyModule {}
