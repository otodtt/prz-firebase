import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

/** Routing */
import { ContactsRoutingModul } from './contacts-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

/**  Pages */
import { ContactsComponent } from './contacts.component';
import { DialogContactsComponent } from './dialog-contacts/dialog-contacts.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ShareComponentsModule,
    ContactsRoutingModul,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContactsComponent,
    DialogContactsComponent
  ],
  exports: [
    // MatFormFieldModule,
    // MatInputModule
  ],
  entryComponents: [ DialogContactsComponent ],
})
export class ContactsModule { }
