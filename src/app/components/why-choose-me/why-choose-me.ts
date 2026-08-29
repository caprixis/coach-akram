import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-choose-me',
  imports: [],
  templateUrl: './why-choose-me.html',
  styleUrl: './why-choose-me.scss',
})
export class WhyChooseMe {
@Input() currentLanguage: string = 'EN';

  reasons = [
   {
      id: '01',
      titleEN: 'Personalized Training Plans',
      titleAR: 'برامج تدريبية مخصصة',
      descEN: 'Custom workout routines designed around your body type, equipment access, and specific goals.',
      descAR: 'تمارين صممت خصيصًا لتناسب طبيعة جسمك، أدواتك المتاحة، وأهدافك الرياضية.'
    },
    {
      id: '02',
      titleEN: 'Continuous Support & Follow-Up',
      titleAR: 'متابعة ودعم مستمر',
      descEN: 'Regular check-ins and adjustment of weights, reps, and macros to ensure constant progress.',
      descAR: 'متابعة دورية وتعديل مستمر للأوزان والتغذية لضمان استمرارية التطور دون توقف.'
    },
    {
      id: '03',
      titleEN: 'Programs Tailored to Each Client',
      titleAR: 'خطط مصممة لكل متدرب',
      descEN: 'No cookie-cutter templates. Every plan adapts to your daily routine, schedule, and lifestyle.',
      descAR: 'لا نعتمد على القوالب الجاهزة. كل خطة مصممة لتناسب جدول يومك وأسلوب حياتك.'
    },
    {
      id: '04',
      titleEN: 'Easy Communication',
      titleAR: 'تواصل سهل ومباشر',
      descEN: 'Direct messaging and video feedback on exercise form through WhatsApp and private channels.',
      descAR: 'تواصل مباشر وسريع وتقييم لأداء التمارين بالفيديو عبر الواتساب والمنصات الخاصة.'
    }
  ];
}
