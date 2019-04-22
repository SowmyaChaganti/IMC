import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcNavComponent } from './imc-nav.component';

describe('ImcNavComponent', () => {
  let component: ImcNavComponent;
  let fixture: ComponentFixture<ImcNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
