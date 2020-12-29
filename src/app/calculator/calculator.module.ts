import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { CalculatorComponent } from './calculator.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{ path: '', component: CalculatorComponent }]),
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }],
  exports: [ MatFormFieldModule, MatInputModule ]
})
export class CalculatorModule { }
