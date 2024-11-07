import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef) {}

  toggelMenue(menue: HTMLDivElement) {
    menue.classList.toggle('active2');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elementRef.nativeElement.querySelector('.navigation');
    window.pageYOffset > 0
      ? navbar.classList.add('sticky')
      : navbar.classList.remove('sticky');
  }
}
