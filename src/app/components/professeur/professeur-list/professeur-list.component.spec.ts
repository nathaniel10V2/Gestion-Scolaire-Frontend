import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurListComponent } from './professeur-list.component';

describe('ProfesseurListComponent', () => {
  let component: ProfesseurListComponent;
  let fixture: ComponentFixture<ProfesseurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesseurListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesseurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
