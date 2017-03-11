import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UUID } from 'angular2-uuid';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as _ from 'lodash';
import * as firebase from 'firebase';

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.scss']
})
export class StudentApplicationComponent {
  applications: FirebaseListObservable<any>;
  studentApplicationForm: FormGroup;
  storage;
  resumeUrl: String; 

  positions = [
    { name: 'Project Developer', value: '1', selected: false },
    { name: 'Project Developer (mentor)', value: '2', selected: false },
    { name: 'Project Lead', value: '3', selected: false },
    { name: 'External VP', value: '4', selected: false }
  ];

  shortAnswers = [
    {
      question: 'Why do you want to join Blueprint?*',
      placeholder: 'e.g. I want to meet awesome people that are passionate about volunteering and helping non-profits!',
      answer: ''
    },
    {
      question: 'Tell us about any project(s) you have worked on in the past (coding, non-coding, or both):*',
      placeholder: 'e.g. I recently worked on a simple website',
      answer: ''
    },
    {
      question: 'Describe any past volunteer/non-profit experience you may have:*',
      placeholder: 'e.g. Red Cross, local soup kitchen, etc.',
      answer: ''
    },
    {
      question: 'Tell us a fun fact!*',
      placeholder: 'e.g. I can lick my elbow!',
      answer: ''
    },
    {
      question: 'Is there anything else you would like to share?',
      placeholder: '(Optional)',
      answer: ''
    }
  ];

  get selectedPositions() {
    return this.positions
              .filter(opt => opt.selected)
              .map(opt => opt.name);
  }

  constructor(public fb: FormBuilder, public af: AngularFire, public router: Router) {
    this.studentApplicationForm = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])],
      program: ['', Validators.required],
      academicYear: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern('[1-5]{1}[A-B]{1}')
      ])],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: '',
      resume: new FormControl(),
      positions: [false, Validators.required]
   });

    this.applications = af.database.list('studentApplications/');
    this.storage = firebase.storage().ref();
  }

  submitForm(event) {
    this.studentApplicationForm.value.status = 'pending';
    this.studentApplicationForm.value.positions = this.selectedPositions;
    this.studentApplicationForm.value.questions = this.shortAnswers;
    if (this.resumeUrl) {
      this.studentApplicationForm.value.resumeUrl = this.resumeUrl;
    }

    const promise = this.applications.push(this.studentApplicationForm.value);
    promise
      .then(_ => this.router.navigate(['students/application/success']));
  }

  uploadResume(event) {
    let file = event.srcElement.files[0];
    if (!file) {
      return;
    }
    let path = 'resumes/' + UUID.UUID();
    let storageRef = this.storage.child(path);
    let task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      // Do stuff on state_changed
    }, error => {
      // Error callback
    }, () => {
      // Success callback
      this.resumeUrl = _.clone(task.snapshot.downloadURL);
    });
  }
}

