import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from "../hero/hero";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  currentLanguage: 'EN' | 'AR' = 'EN';
// Make sure your navbar toggle updates this parent property!
  onLanguageChange(lang: 'EN' | 'AR') {
    this.currentLanguage = lang;
  }
}
