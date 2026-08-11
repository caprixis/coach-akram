import { Component, HostListener } from '@angular/core';
import { NAV_ITEMS, NavItem} from '../../services/language';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

navItems: NavItem[] = NAV_ITEMS;
  currentLanguage: 'EN' | 'AR' = 'EN';
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  // Toggle state map (EN -> AR, AR -> EN)
  private readonly nextLanguageMap = new Map<'EN' | 'AR', 'EN' | 'AR'>([
    ['EN', 'AR'],
    ['AR', 'EN']
  ]);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleLanguage() {
    this.currentLanguage = this.nextLanguageMap.get(this.currentLanguage) || 'EN';
    
    // Set text direction: 'rtl' for Arabic, 'ltr' for English
    const isArabic = this.currentLanguage === 'AR';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLanguage.toLowerCase();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onNavClick(targetId: string) {
    this.activeSection = targetId;
    this.closeMobileMenu();

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openWhatsApp() {
    window.open('https://wa.me/1234567890?text=Hello%20Coach%20Akram,%20I%20want%20to%20book%20a%20free%20consultation!', '_blank');
  }
}

