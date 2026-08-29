import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


interface Qualification {
  titleEN: string;
  titleAR: string;
  issuerEN: string;
  issuerAR: string;
  status: 'active' | 'upcoming';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html', // <-- Added .component
  styleUrl: './about.scss',    // <-- Added .component
})
export class About {
@Input() currentLanguage: string = 'EN';

// Placeholder metrics - ready for real data later
  yearsOfExperience: string = '5+'; 
  clientsTransformed: string = '150+';

  // Certifications list - dynamically renders as Akram earns them
  certifications: Qualification[] = [
    {
      titleEN: 'Certified Strength & Conditioning Specialist',
      titleAR: 'شهادة أخصائي تدريب القوة واللياقة',
      issuerEN: 'International Fitness Association',
      issuerAR: 'الجمعية الدولية للكتلة البدنية',
      status: 'active'
    },
    {
      titleEN: 'Advanced Sports Nutrition Certification',
      titleAR: 'شهادة التغذية الرياضية المتقدمة',
      issuerEN: 'Precision Nutrition',
      issuerAR: 'مؤسسة التغذية المتقدمة',
      status: 'upcoming' // Displayed as "In Progress" until earned
    }
  ];
}

