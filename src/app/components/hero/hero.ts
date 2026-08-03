import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
// Pass currentLanguage from parent app.component.ts or service
  @Input() currentLanguage: 'EN' | 'AR' = 'EN';

  readonly phoneNumber = '201024409894';
openWhatsApp() {
  const textEn = "Hello Coach Akram, I want to inquire about your coaching programs!";
  const textAr = "مرحباً كوتش أكرم، أود الاستفسار عن برامج التدريب الخاصة بك!";
  
  const message = encodeURIComponent(this.currentLanguage === 'EN' ? textEn : textAr);
  
  // Alternative WhatsApp endpoint if wa.me gives SSL/network errors
  window.open(`https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${message}`, '_blank');
}
  scrollToConsultation() {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  }
}
