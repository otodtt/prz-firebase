import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { ResizeService } from '../../common/services/ResizeService';

@Component({
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent implements OnInit, OnDestroy, AfterViewInit {
  headerId = 'aa-practices';
  breadcrumbTitle = 'ДРЗП';

  mode = 'side';
  openedQuery: MediaQueryList;
  mediumQuery: MediaQueryList;
  smallQuery: MediaQueryList;

  private resizeSubscription: Subscription;
  private mobileQueryListener: () => void;

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private resizeService: ResizeService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.openedQuery = media.matchMedia('(max-width: 850px)');
    // tslint:disable-next-line: deprecation
    this.openedQuery.addListener(this.mobileQueryListener);

    this.mediumQuery = media.matchMedia('(max-width: 768px)');
    // tslint:disable-next-line: deprecation
    this.mediumQuery.addListener(this.mobileQueryListener);

    this.smallQuery = media.matchMedia('(max-width: 481px)');
    // tslint:disable-next-line: deprecation
    this.smallQuery.addListener(this.mobileQueryListener);

    if (this.mediumQuery.matches === true && this.smallQuery.matches === false) {
      this.mode = 'push';
    }
    if (this.mediumQuery.matches === true && this.smallQuery.matches === true) {
      this.mode = 'over';
    }
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitId(this.headerId);
  }

  ngAfterViewInit(): void  {
    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => {
        if (size.innerWidth > 768) {
          this.mode = 'side';
        }
        if (size.innerWidth < 768) {
          this.mode = 'push';
        }
        if (size.innerWidth < 481) {
          this.mode = 'over';
        }
      });
  }

  ngOnDestroy(): void  {
    // tslint:disable-next-line: deprecation
    this.openedQuery.removeListener(this.mobileQueryListener);
    // tslint:disable-next-line: deprecation
    this.mediumQuery.removeListener(this.mobileQueryListener);
    // tslint:disable-next-line: deprecation
    this.smallQuery.removeListener(this.mobileQueryListener);
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
