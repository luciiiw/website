import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.scss']
})
export class StudentApplicationComponent {
  studentApplicationForm: FormGroup;

  positions = [
    { name: 'Project Developer', value: '1', checked: false },
    { name: 'Project Developer (mentor)', value: '2', checked: false },
    { name: 'Project Lead', value: '2', checked: false }
  ]

  get selectedPositions() {
    return this.positions
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  constructor(public fb: FormBuilder) {
    this.studentApplicationForm = this.fb.group({
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      program: ["", Validators.required],
      academicYear: ["", Validators.required],
      question1: ["", Validators.required],
      question2: "", 
      question3: "",
      question4: "",
      question5: ""
    });
  }
  submitForm(event) {
    console.log(this.studentApplicationForm.value);
    event.preventDefault();
  }
}

