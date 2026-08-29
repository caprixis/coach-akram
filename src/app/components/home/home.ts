import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from "../hero/hero";
import { HeroStats } from "../hero-stats/hero-stats";
import { About } from "../about/about";
import { Services } from "../services/services";
import { WhyChooseMe } from "../why-choose-me/why-choose-me";

@Component({
  selector: 'app-home',
  imports: [Hero, HeroStats, About, Services, WhyChooseMe],
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
