import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveCreationComponent } from './eleve-creation.component';

describe('EleveCreationComponent', () => {
  let component: EleveCreationComponent;
  let fixture: ComponentFixture<EleveCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleveCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
