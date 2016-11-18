import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { UUID } from 'angular2-uuid';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as _ from 'lodash';
import * as firebase from 'firebase';

@Component({
  selector: 'student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.scss']
})
export class StudentApplicationComponent {
  studentApplicationForm: FormGroup;
  applications: FirebaseListObservable<any>;
  storage;
  resumeUrl: String;

  positions = [
    { name: 'Project Developer', value: '1', selected: false },
    { name: 'Project Developer (mentor)', value: '2', selected: false },
    { name: 'Project Lead', value: '2', selected: false }
  ];

  shortAnswers = [
    { 
      question: 'Why do you want to join Blueprint?', 
      placeholder: 'e.g. I want to meet awesome people that are passionate about volunteering and helping non-profits!',
      answer: '' 
    },
    { 
      question: 'Tell us about any project(s) you have worked on in the past (coding, non-coding, or both):',
      placeholder: 'e.g. I recently worked on a simple website', 
      answer: ''
    },
    { 
      question: 'Describe any past volunteer/non-profit experience you may have:',
      placeholder: 'e.g. Red Cross, local soup kitchen, etc.',
      answer: '' 
    },
    { 
      question: 'Tell us a fun fact!', 
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
              .map(opt => opt.name)
  }
  
  constructor(public fb: FormBuilder, af: AngularFire) {
    this.studentApplicationForm = this.fb.group({
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      program: ["", Validators.required],
      resume: new FormControl(),
      positions: new FormControl(),
      academicYear: ["", Validators.required],
      questions: ["", Validators.required],
    });
    
    this.applications = af.database.list('studentApplications/');
    this.storage = firebase.storage().ref();
  }

  submitForm(event) {
    this.studentApplicationForm.value.positions = this.selectedPositions;
    this.studentApplicationForm.value.questions = this.shortAnswers;
    if (this.resumeUrl) {
      this.studentApplicationForm.value.resumeUrl = this.resumeUrl;
    }

    console.log(this.studentApplicationForm.value);
    this.applications.push(this.studentApplicationForm.value);
    event.preventDefault();
  }

  uploadResume(event) {
    let file = event.srcElement.files[0];
    if (!file) {
      return
    }
    let path = 'resumes/'+file.name;
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

