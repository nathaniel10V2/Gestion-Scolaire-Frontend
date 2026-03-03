import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveModificationComponent } from './eleve-modification.component';

describe('EleveModificationComponent', () => {
  let component: EleveModificationComponent;
  let fixture: ComponentFixture<EleveModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleveModificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
