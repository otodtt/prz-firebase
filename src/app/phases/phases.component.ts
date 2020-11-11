import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';


import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { ResizeService } from '../common/services/ResizeService';

@Component({
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.scss']
})
export class PhasesComponent implements OnInit, OnDestroy, AfterViewInit {
  headerId = 'aa-phases';
  breadcrumbTitle = 'BBCH';

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
    this.openedQuery.addEventListener('change', this.mobileQueryListener);

    this.mediumQuery = media.matchMedia('(max-width: 768px)');
    this.mediumQuery.addEventListener('change', this.mobileQueryListener);

    this.smallQuery = media.matchMedia('(max-width: 481px)');
    this.smallQuery.addEventListener('change', this.mobileQueryListener);


    if (this.mediumQuery.matches === true && this.smallQuery.matches === false) {
      this.mode = 'push';
    }
    if (this.mediumQuery.matches === true && this.smallQuery.matches === true) {
      this.mode = 'over';
    }
  }

  ngOnInit(): any {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitId(this.headerId);
  }

  ngAfterViewInit(): void {
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

  ngOnDestroy(): void {
    this.openedQuery.removeEventListener('change', this.mobileQueryListener);
    this.mediumQuery.removeEventListener('change', this.mobileQueryListener);
    this.smallQuery.removeEventListener('change', this.mobileQueryListener);

    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
