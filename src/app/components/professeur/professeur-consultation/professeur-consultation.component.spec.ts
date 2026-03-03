import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurConsultationComponent } from './professeur-consultation.component';

describe('ProfesseurConsultationComponent', () => {
  let component: ProfesseurConsultationComponent;
  let fixture: ComponentFixture<ProfesseurConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesseurConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesseurConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
