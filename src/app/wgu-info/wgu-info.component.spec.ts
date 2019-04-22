import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WguInfoComponent } from './wgu-info.component';

describe('WguInfoComponent', () => {
  let component: WguInfoComponent;
  let fixture: ComponentFixture<WguInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WguInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WguInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
