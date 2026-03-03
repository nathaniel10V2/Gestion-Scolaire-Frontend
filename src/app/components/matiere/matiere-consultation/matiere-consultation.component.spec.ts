import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereConsultationComponent } from './matiere-consultation.component';

describe('MatiereConsultationComponent', () => {
  let component: MatiereConsultationComponent;
  let fixture: ComponentFixture<MatiereConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatiereConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatiereConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
