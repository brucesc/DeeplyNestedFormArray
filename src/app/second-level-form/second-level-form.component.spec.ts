import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLevelFormComponent } from './second-level-form.component';

describe('SecondLevelFormComponent', () => {
  let component: SecondLevelFormComponent;
  let fixture: ComponentFixture<SecondLevelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLevelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
