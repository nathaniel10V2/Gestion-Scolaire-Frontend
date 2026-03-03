import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurModificationComponent } from './professeur-modification.component';

describe('ProfesseurModificationComponent', () => {
  let component: ProfesseurModificationComponent;
  let fixture: ComponentFixture<ProfesseurModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesseurModificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesseurModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
