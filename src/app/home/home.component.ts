import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

declare var jQuery: any;

@Component({
  selector: 'prz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private title = 'ПРЗ | Продуки за растителна защита. Добри Растителнозащитни Пракатики. Интегрирано Управление на Вредители и ПИВ.';
  private description =   'Продуки за растителна защита (инсектици, фунгициди, хербициди, ' +
                          'акарициди и други). Продуки за растителна защита по култури, ' +
                          'Добри растителнозащитни пракатики в земеделието. ' +
                          'Интегрирано управление на вредители. Прагове на Икономическа Вредност.';
  private keywords = 'продуки, растителна, защита, култури, растителнозащитни, пракатики';
  breadcrumbTitle = 'НАЧАЛО';
  breadcrumbName = 'Начало';
  headerId = 'aa-home';

  constructor(
      private changeBreadcrumb: ChangeBreadcrumbService,
      private seoService: SeoService
  ) {
      this.seoService.addTitle(this.title);
      this.seoService.setMeta(this.description, this.keywords);
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.changeBreadcrumb.emitId(this.headerId);

    (($) => {
      let slideIndex = 0;
      showSlides();

      function showSlides(): void {
        let i: any;
        const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
        const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;
        for (i = 0; i < slides.length; i ++) {
          slides[i].style.display = 'none';
        }
        slideIndex ++;
        if (slideIndex > slides.length) {slideIndex = 1; }
        for ( i = 0; i < dots.length; i ++) {
          dots[i].className = dots[i].className.replace(' active', '');
        }
        if (slides.length !== 0) {
          slides[slideIndex - 1].style.display = 'block';
          dots[slideIndex - 1].className += ' active';
        }

        setTimeout(showSlides, 6000); // Change image every 6 seconds
      }
    })(jQuery);
  }
}
