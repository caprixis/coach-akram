import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientResults } from './client-results';

describe('ClientResuls', () => {
  let component: ClientResults;
  let fixture: ComponentFixture<ClientResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
