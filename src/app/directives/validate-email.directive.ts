import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function validateEmailFactory() {
  return (c: FormControl) => {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  };
}

@Directive({
  selector: '[appValidateEmail][ngModel],[appValidateEmail][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useClass: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})

export class EmailValidatorDirective {
  validator: Function;

  constructor() {
    this.validator = validateEmailFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
