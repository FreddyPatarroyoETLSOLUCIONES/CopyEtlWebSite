import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityComponent } from './ability.component';

describe('AbilityComponent', () => {
  let component: AbilityComponent;
  let fixture: ComponentFixture<AbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
