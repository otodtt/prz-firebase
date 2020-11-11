import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

import { AngularFireDatabase } from '@angular/fire/database';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';

import { Product } from '../../shared/models/product.model';

@Component({
  templateUrl: './acaricide-detail.component.html',
  styleUrls: ['./acaricide-detail.component.scss']
})
export class AcaricideDetailComponent implements OnInit, OnDestroy {
  private dataURL = 'products/acaricides';

  product: Product;
  subscription: Subscription;

  step = 0;
  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    db: AngularFireDatabase,
  ) {
    // tslint:enable:no-string-literal
    const id = this.activatedRoute.snapshot.params['id'];

    this.subscription = db.list(this.dataURL).valueChanges().subscribe(data => {
      this.product = data.find((x: Product) => +x.id === +id);
      console.log(data.find((x: Product) => +x.id === +id));

      if (this.product === undefined) {
        this.router.navigate(['products/acaricides']);
      } else {
        this.seoService.addTitle('ПРЗ | ' + this.product.name);
        this.seoService.setNoKeywordsMeta(this.product.pestDescription);
        this.changeBreadcrumb.emitName(this.product.name);
      }
    });
  }

  ngOnInit(): void {
  }


  setStep(index: number): void {
      this.step = index;
  }

  nextStep(): void {
      this.step++;
  }

  prevStep(): void {
      this.step--;
  }

  ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
  }
}
