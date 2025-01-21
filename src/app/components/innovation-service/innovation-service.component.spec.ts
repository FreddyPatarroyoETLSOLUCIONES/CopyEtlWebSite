import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationServiceComponent } from './innovation-service.component';

describe('InnovationServiceComponent', () => {
  let component: InnovationServiceComponent;
  let fixture: ComponentFixture<InnovationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
