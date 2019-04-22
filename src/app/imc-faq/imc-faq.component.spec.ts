import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcFaqComponent } from './imc-faq.component';

describe('ImcFaqComponent', () => {
  let component: ImcFaqComponent;
  let fixture: ComponentFixture<ImcFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
