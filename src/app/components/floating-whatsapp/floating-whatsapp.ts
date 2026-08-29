import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floating-whatsapp',
  imports: [],
  templateUrl: './floating-whatsapp.html',
  styleUrl: './floating-whatsapp.scss',
})
export class FloatingWhatsapp {
@Input() currentLanguage: 'EN' | 'AR' = 'EN';
  
  // Replace with Coach Akram's phone number in international format (e.g. 201000000000)
  phoneNumber: string = '201000000000';

  get whatsappUrl(): string {
    const defaultMsg = this.currentLanguage === 'EN'
      ? 'Hello Coach Akram! I am interested in joining your coaching program.'
      : 'أهلاً كابتن أكرم! أود الاستفسار عن برامج التدريب المتاحة.';
      
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(defaultMsg)}`;
  }
}
