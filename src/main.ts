import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { RecaptchaComponent } from 'ng-recaptcha';

if (environment.production) {
  enableProdMode();
}

RecaptchaComponent.prototype.ngOnDestroy = function(): void {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
