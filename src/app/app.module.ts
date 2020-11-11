import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';

/** Firebase */
import { firebase } from '../environments/firebase';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireDatabase } from '@angular/fire/database';

/** Router */
import { AppRoutingModul } from './app-routing.module';

/** Services */
import { ChangeBreadcrumbService } from './common/services/changeBreadcrumb.service';
import { ResizeService } from './common/services/ResizeService';
import { SeoService } from './common/services/SeoService';

/** Modules */
import { MaterialModule } from './common/material/material.module';
import { ShareComponentsModule } from './common/share.components.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ScrollButtonComponent } from './shared/scroll-button/scroll-button.component';

/** Pages */
import { HomeComponent } from './home/home.component';
import { CropsComponent } from './crops/crops.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormulationsComponent } from './formulations/formulations.component';
import { LegislationComponent } from './legislation/legislation.component';
import { DialogContactsComponent } from './contacts/dialog-contacts/dialog-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideNavComponent,
    ScrollButtonComponent,
    HomeComponent,
    CropsComponent,
    DocumentsComponent,
    ContactsComponent,
    FormulationsComponent,
    NotFoundComponent,
    LegislationComponent,
    DialogContactsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ShareComponentsModule,
    AppRoutingModul,
    AngularFireModule,
    AngularFireModule.initializeApp(firebase.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    ChangeBreadcrumbService,
    ResizeService,
    SeoService,
    AngularFireDatabase,
  ],
  entryComponents: [ DialogContactsComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
