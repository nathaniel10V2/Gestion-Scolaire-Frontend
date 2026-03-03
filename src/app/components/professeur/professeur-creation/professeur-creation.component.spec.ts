import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurCreationComponent } from './professeur-creation.component';

describe('ProfesseurCreationComponent', () => {
  let component: ProfesseurCreationComponent;
  let fixture: ComponentFixture<ProfesseurCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesseurCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesseurCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
