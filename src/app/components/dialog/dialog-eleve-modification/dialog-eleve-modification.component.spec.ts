import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEleveModificationComponent } from './dialog-eleve-modification.component';

describe('DialogEleveModificationComponent', () => {
  let component: DialogEleveModificationComponent;
  let fixture: ComponentFixture<DialogEleveModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEleveModificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEleveModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
