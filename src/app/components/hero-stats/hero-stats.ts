import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-stats',
  imports: [],
  templateUrl: './hero-stats.html',
  styleUrl: './hero-stats.scss',
})
export class HeroStats {
@Input() currentLanguage: string = 'EN';
}
