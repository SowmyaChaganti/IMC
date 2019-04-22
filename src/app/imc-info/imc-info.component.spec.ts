import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcInfoComponent } from './imc-info.component';

describe('ImcInfoComponent', () => {
  let component: ImcInfoComponent;
  let fixture: ComponentFixture<ImcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
