import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ThirdLevelFormComponent } from '../third-level-form/third-level-form.component';

@Component({
  selector: 'app-second-level-form',
  templateUrl: './second-level-form.component.html',
  styleUrls: ['./second-level-form.component.css']
})
export class SecondLevelFormComponent implements OnInit {

  @ViewChild(ThirdLevelFormComponent) thirdLevelRef: ThirdLevelFormComponent
  secondLevelForm: FormGroup;

  get secondLevelArray() {
    return this.secondLevelForm.get('secondLevelArray') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  initSecondLevelForm() {
    return this.secondLevelForm = this.fb.group({
      name: [''],
      date: [''],
      secondLevelArray: this.fb.array([
        this.initSecondLevelArray(),
      ]),
      thirdLevelForm: this.thirdLevelRef.initThirdLevelForm()
    });
  }

  initSecondLevelArray() {
    return this.fb.group({
      steven: [''],
      campbell: [''],
      bruce: [''],
    })
  }

  addSecondLevelArray() {
    this.secondLevelArray.push(this.initSecondLevelArray());
  }

  removeSecondLevelArray(index: number) {
    this.secondLevelArray.removeAt(index);
  }
}
