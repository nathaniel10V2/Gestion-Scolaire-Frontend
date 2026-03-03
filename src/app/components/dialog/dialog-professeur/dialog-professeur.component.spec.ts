import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfesseurComponent } from './dialog-professeur.component';

describe('DialogProfesseurComponent', () => {
  let component: DialogProfesseurComponent;
  let fixture: ComponentFixture<DialogProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogProfesseurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
