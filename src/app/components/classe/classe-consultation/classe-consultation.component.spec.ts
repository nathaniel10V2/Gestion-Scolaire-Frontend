import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseConsultationComponent } from './classe-consultation.component';

describe('ClasseConsultationComponent', () => {
  let component: ClasseConsultationComponent;
  let fixture: ComponentFixture<ClasseConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasseConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
