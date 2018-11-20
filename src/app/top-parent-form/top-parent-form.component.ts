import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecondLevelFormComponent } from '../second-level-form/second-level-form.component';

@Component({
  selector: 'app-top-parent-form',
  templateUrl: './top-parent-form.component.html',
  styleUrls: ['./top-parent-form.component.css']
})
export class TopParentFormComponent implements OnInit {

  @ViewChild(SecondLevelFormComponent) secondLevelRef: SecondLevelFormComponent;

  parentForm: FormGroup;
  testFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.parentForm = this.fb.group({
      firstLevel: [''],
      secondLevelForm: this.secondLevelRef.initSecondLevelForm(),
      testFormGroup: this.fb.group({
        testOne: [''],
        testTwo: [''],
        testThree: ['']
      }),
      // testFormArray: this.fb.array([])
    });
  }

  initTestFormGroup() {
    return this.testFormGroup = this.fb.group({
      testOne: [''],
      testTwo: [''],
      testThree: ['']
    })
  }
}
