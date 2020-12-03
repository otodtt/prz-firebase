import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

/** Routing */
import { RouterModule } from '@angular/router';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
// import { MaterialModule } from '../common/material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


/**  Pages */
import { ContactsComponent } from './contacts.component';
import { DialogContactsComponent } from './dialog-contacts/dialog-contacts.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{ path: '', component: ContactsComponent }]),
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: [
    ContactsComponent,
    DialogContactsComponent
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [ DialogContactsComponent ],
})
export class ContactsModule { }
