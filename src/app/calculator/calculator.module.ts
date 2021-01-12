import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { CalculatorComponent } from './calculator.component';
import { DialogCalculatorComponent } from './calculator.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CalculatorComponent,
    DialogCalculatorComponent
  ],
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{ path: '', component: CalculatorComponent }]),
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }],
  exports: [ MatFormFieldModule, MatInputModule ]
})
export class CalculatorModule { }
