import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false,
})
export class HeaderComponent {
  onMenueToggel(links: HTMLDivElement) {
    if (links.classList.contains('hidd_links')) {
      links.classList.remove('hidd_links');
      links.classList.add('show_links');
    } else {
      links.classList.add('hidd_links');
      links.classList.remove('show_links');
    }
  }
}
