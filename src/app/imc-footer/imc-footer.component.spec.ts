import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcFooterComponent } from './imc-footer.component';

describe('ImcFooterComponent', () => {
  let component: ImcFooterComponent;
  let fixture: ComponentFixture<ImcFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
