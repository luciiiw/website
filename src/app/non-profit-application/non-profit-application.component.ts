import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-non-profit-application',
  templateUrl: './non-profit-application.component.html',
  styleUrls: ['./non-profit-application.component.scss']
})

export class NonProfitApplicationComponent {
  nonProfitApplicationForm: FormGroup;
  applications: FirebaseListObservable<any>;
  storage;
  isLoading: Boolean;

  preferredContactMethods = [
    { name: 'Email', value: '1', selected: false },
    { name: 'Phone', value: '2', selected: false },
    { name: 'SMS', value: '3', selected: false }
  ];

  shortAnswers = [
    {
      question: 'What does your organization do?*',
      placeholder: 'e.g. We build technical projects for social good',
      answer: ''
    },
    {
      question: 'What problem do you need help with?*',
      placeholder: 'e.g. We want help with building a system that conducts surveys to people without a reliable internet connection',
      answer: ''
    },
    {
      question: 'Do you have a specific solution in mind? If so, please briefly describe the solution:*',
      placeholder: 'e.g. We want to conduct the surveys over SMS so that people without internet and smartphones can easily participate in the surveys',
      answer: ''
    },
    {
      question: 'Please provide your availability over the next couple of weeks:*',
      placeholder: 'e.g. I am available on MWF between 10AM - 2PM (EST)',
      answer: ''
    }
  ];

  get selectedMethods() {
    return this.preferredContactMethods
              .filter(opt => opt.selected)
              .map(opt => opt.name);
  }

  constructor(public fb: FormBuilder, public af: AngularFire, public router: Router) {
    this.nonProfitApplicationForm = this.fb.group({
      organizationName: ['', Validators.required],
      website: ['', Validators.required],
      location: ['', Validators.required],
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9()-]+$')
      ])],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      preferredContactMethods: new FormControl()
   });

    this.applications = af.database.list('nonProfitApplications/');
    this.storage = firebase.storage().ref();

    this.isLoading = false;
  }

  submitForm(event) {
    this.isLoading = true;

    this.nonProfitApplicationForm.value.status = 'pending';
    this.nonProfitApplicationForm.value.preferredContactMethods = this.selectedMethods;
    this.nonProfitApplicationForm.value.questions = this.shortAnswers;
    this.nonProfitApplicationForm.value.timestamp = Date.now();

    const promise = this.applications.push(this.nonProfitApplicationForm.value);
    promise
      .then(_ => this.router.navigate(['nonprofits/application/success']))
      .catch(() => {
        this.isLoading = false;
      }); 
  }
}
