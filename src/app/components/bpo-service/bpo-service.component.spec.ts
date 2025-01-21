import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpoServiceComponent } from './bpo-service.component';

describe('BpoServiceComponent', () => {
  let component: BpoServiceComponent;
  let fixture: ComponentFixture<BpoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpoServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
