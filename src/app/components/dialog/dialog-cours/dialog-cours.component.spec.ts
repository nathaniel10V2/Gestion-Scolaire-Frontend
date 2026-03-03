import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClasseComponent } from './dialog-cours.component';

describe('DialogClasseComponent', () => {
  let component: DialogClasseComponent;
  let fixture: ComponentFixture<DialogClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogClasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
