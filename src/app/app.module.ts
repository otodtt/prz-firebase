import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Firebase */
import { firebase } from '../environments/firebase';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

/** Router */
import { AppRoutingModul } from './app-routing.module';

/** Services те са в core.module */

/** Modules */
import { MaterialModule } from './common/material/material.module';
import { ShareComponentsModule } from './common/share.components.module';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ScrollButtonComponent } from './shared/scroll-button/scroll-button.component';

/** Pages */
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideNavComponent,
    ScrollButtonComponent,
    HomeComponent,
    NotFoundComponent,
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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
