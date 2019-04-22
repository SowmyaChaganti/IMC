import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcHeaderComponent } from './imc-header.component';

describe('ImcHeaderComponent', () => {
  let component: ImcHeaderComponent;
  let fixture: ComponentFixture<ImcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
