import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereCreationComponent } from './matiere-creation.component';

describe('MatiereCreationComponent', () => {
  let component: MatiereCreationComponent;
  let fixture: ComponentFixture<MatiereCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatiereCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatiereCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
