export interface NavItem {
  id: string;
  labelEn: string;
  labelAr: string;
  target: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelEn: 'Home', labelAr: 'الرئيسية', target: 'home' },
  { id: 'about', labelEn: 'About', labelAr: 'من نحن', target: 'about' },
  { id: 'services', labelEn: 'Services', labelAr: 'خدماتنا', target: 'services' },
  { id: 'why-us', labelEn: 'Why Me?', labelAr: 'لماذا تختارني؟', target: 'why-us' },
  { id: 'results', labelEn: 'Results', labelAr: 'النتائج', target: 'results' },
  { id: 'faq', labelEn: 'FAQ', labelAr: 'الأسئلة الشائعة', target: 'faq' },
  { id: 'contact', labelEn: 'Contact', labelAr: 'تواصل معي', target: 'contact' }
];