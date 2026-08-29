import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
@Input() currentLanguage: 'EN' | 'AR' = 'EN';

  currentYear: number = new Date().getFullYear();

  quickLinks = [
    { labelEN: 'About Me', labelAR: 'عن المدرب', target: '#about' },
    { labelEN: 'Services', labelAR: 'الخدمات', target: '#services' },
    { labelEN: 'Why Choose Me', labelAR: 'لماذا تدرب معي', target: '#why-me' },
    { labelEN: 'Transformations', labelAR: 'نتائج المتدربين', target: '#results' },
    { labelEN: 'FAQ', labelAR: 'الأسئلة الشائعة', target: '#faq' },
  ];

  socialLinks = [
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/YOUR_PHONE_NUMBER' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/YOUR_HANDLE' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/@YOUR_HANDLE' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@YOUR_HANDLE' },
    { name: 'Facebook', icon: '👤', url: 'https://facebook.com/YOUR_HANDLE' }
  ];
}
