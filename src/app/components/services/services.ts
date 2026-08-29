import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
@Input() currentLanguage: string = 'EN';
  @Output() selectPackage = new EventEmitter<string>();

  onSelect(packageName: string) {
    this.selectPackage.emit(packageName);
  }
}
