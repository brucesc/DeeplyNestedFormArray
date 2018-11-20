import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-third-level-form',
  templateUrl: './third-level-form.component.html',
  styleUrls: ['./third-level-form.component.css']
})
export class ThirdLevelFormComponent implements OnInit {

  thirdLevelForm: FormGroup;

  get thirdLevelArray() {
    return this.thirdLevelForm.get('thirdLevelArray') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  initThirdLevelForm() {
    return this.thirdLevelForm = this.fb.group({
      thirdLevelArray: this.fb.array([
        this.initThirdLevelArray()
      ])
    });
  }

  initThirdLevelArray() {
    return this.fb.group({
      test: ['']
    })
  }

  addThirdLevelArray() {
    this.thirdLevelArray.push(this.initThirdLevelArray())
  }

  removeThirdLevelArray(index: number) {
    this.thirdLevelArray.removeAt(index);
  }
}
