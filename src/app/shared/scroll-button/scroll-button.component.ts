import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'prz-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
  public isScrollTop: number;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.onScroll();
  }
  constructor(private el: ElementRef) { }

  ngOnInit(): void { }

  onScroll(): void {
    this.isScrollTop = this.el.nativeElement.getBoundingClientRect().top * -1;
  }

  scrollToTop(): void {
    this.el.nativeElement.getBoundingClientRect();
    window.scrollTo({ left: 0, top: 0 });
    /**  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' }); */
  }
}
