import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopParentFormComponent } from './top-parent-form/top-parent-form.component';
import { SecondLevelFormComponent } from './second-level-form/second-level-form.component';
import { ThirdLevelFormComponent } from './third-level-form/third-level-form.component';
import { DynamicFormGroupComponent } from './dynamic-form-group/dynamic-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TopParentFormComponent,
    SecondLevelFormComponent,
    ThirdLevelFormComponent,
    DynamicFormGroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
