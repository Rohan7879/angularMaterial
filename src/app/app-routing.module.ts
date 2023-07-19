import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './component/date-picker/date-picker.component';
import { InputFieldComponent } from './component/input-field/input-field.component';
import { StepperComponent } from './component/stepper/stepper.component';

const routes: Routes = [
  { path: 'date', component: DatePickerComponent },
  { path: 'input', component: InputFieldComponent },
  { path: 'stepper', component: StepperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
