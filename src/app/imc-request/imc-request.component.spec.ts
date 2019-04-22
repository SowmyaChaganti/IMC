import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcRequestComponent } from './imc-request.component';

describe('ImcRequestComponent', () => {
  let component: ImcRequestComponent;
  let fixture: ComponentFixture<ImcRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
