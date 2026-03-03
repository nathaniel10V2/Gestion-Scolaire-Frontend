import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveConsultationComponent } from './eleve-consultation.component';

describe('EleveConsultationComponent', () => {
  let component: EleveConsultationComponent;
  let fixture: ComponentFixture<EleveConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleveConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
