import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Firebase */
import { AngularFireModule } from '@angular/fire';
import { firebase } from '../environments/firebase';
/** Router */
import { AppRoutingModul } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMaterialModule } from './common/material/home.material.module';
/** Services те са в core.module */
/** Modules */
import { ShareComponentsModule } from './common/share.components.module';
import { CoreModule } from './core.module';
/** Pages */
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ScrollButtonComponent } from './shared/scroll-button/scroll-button.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';

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
    BrowserAnimationsModule,
    ShareComponentsModule,
    AppRoutingModul,
    AngularFireModule.initializeApp(firebase.firebase),
    CoreModule,
    HomeMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
