import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopParentFormComponent } from './top-parent-form.component';

describe('TopParentFormComponent', () => {
  let component: TopParentFormComponent;
  let fixture: ComponentFixture<TopParentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopParentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
