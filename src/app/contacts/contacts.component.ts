import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Subscription, Observable, merge } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDialog } from '@angular/material/dialog';
import { DialogContactsComponent } from './dialog-contacts/dialog-contacts.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';
import { ResizeService } from '../common/services/ResizeService';
/** Проба след ресет на формата да не избива грешка */
import { RecaptchaComponent } from 'ng-recaptcha';

// tslint:disable-next-line: max-line-length
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'prz-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(FormGroupDirective, { static: true }) formGroupDirective: FormGroupDirective;

  headerId = 'aa-contacts';
  breadcrumbTitle = 'КОНТАКТИ';
  breadcrumbName = 'Контакти';

  private title = 'ПРЗ | Контакти';
  private description = 'Продуки за растителна защита. Добри Растителнозащитни Пракатики и други. ' +
                        'Контактна форма за връзка с автора на сайта.';

  contactForm: FormGroup;
  validationMessages: any = {
    name: [
      { type: 'required', message: 'Името е задължително!' },
      { type: 'minlength', message: 'Минимална дължина за име - 2 знака.' }
    ],
    subject: [
      { type: 'required', message: 'Полето е задължително' },
      { type: 'minlength', message: 'Минимална дължина за тема - 3 знака.' }
    ],
    text: [
      { type: 'required', message: 'Моля, напишете Вашето съобщение!' },
    ],
    email: [
      { type: 'required', message: 'Трябва да въведете валиден адрес!' },
      { type: 'email', message: '' },
      { type: 'pattern', message: 'Невалиден email' }
    ]
  };

  mode = '';
  bigQuery: MediaQueryList;
  mediumQuery: MediaQueryList;
  smallQuery: MediaQueryList;

  private resizeSubscription: Subscription;
  private mobileQueryListener: () => void;

  /**
   * Временно за показване на съобщение, че формата не е изпратена.
   * След това да се махне
   *  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
   *  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   *  и @angular/material/snack-bar
   */
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private resizeService: ResizeService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private snackBar: MatSnackBar
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setNoKeywordsMeta(this.description);

    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.bigQuery = media.matchMedia('(max-width: 850px)');
    this.bigQuery.addEventListener('change', this.mobileQueryListener);

    this.mediumQuery = media.matchMedia('(max-width: 768px)');
    this.mediumQuery.addEventListener('change', this.mobileQueryListener);

    this.smallQuery = media.matchMedia('(max-width: 481px)');
    this.smallQuery.addEventListener('change', this.mobileQueryListener);

    if (
      this.bigQuery.matches === false &&
      this.mediumQuery.matches === false &&
      this.smallQuery.matches === false
    ) {
      this.mode = '40%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === false &&
      this.smallQuery.matches === false
    ) {
      this.mode = '60%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === true &&
      this.smallQuery.matches === false
    ) {
      this.mode = '80%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === true &&
      this.smallQuery.matches === true
    ) {
      this.mode = '';
    }
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.changeBreadcrumb.emitId(this.headerId);

    this.createForm();
  }

  createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      subject: ['', Validators.required ],
      text: ['', Validators.required ],
      email:  ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)]],
      captcha: ['', Validators.required]
    });
  }

  resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit( value: any): void {
    // alert('Вашето съобщение не е изпратено. Моля, използвайте имейл адреса посочен по-долу! Благодаря!');
    this.snackBar.open(`Вашето съобщение не е изпратено. Моля, използвайте имейл адреса посочен по-долу! Благодаря!`, 'Край', {
      duration: 3500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.resetForm();

    /** Проба след ресет на формата да не избива грешка */
    RecaptchaComponent.prototype.ngOnDestroy = function(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    };
  }

  ngAfterViewInit(): void {
    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => {
        if (size.innerWidth > 768) {
          this.mode = '60%';
        }
        if (size.innerWidth < 768) {
          this.mode = '80%';
        }
        if (size.innerWidth < 481) {
          this.mode = '';
        }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( DialogContactsComponent, {
      width: this.mode
    });
  }

  resetForm(): void {
    this.formGroupDirective.resetForm();
  }

  ngOnDestroy(): void {
    this.bigQuery.removeEventListener('change', this.mobileQueryListener);
    this.mediumQuery.removeEventListener('change', this.mobileQueryListener);
    this.smallQuery.removeEventListener('change', this.mobileQueryListener);

    if ( this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}

