import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLevelFormComponent } from './third-level-form.component';

describe('ThirdLevelFormComponent', () => {
  let component: ThirdLevelFormComponent;
  let fixture: ComponentFixture<ThirdLevelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdLevelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
