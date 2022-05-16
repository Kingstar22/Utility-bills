import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
import {AuthSharedUserService} from '../../../auth-shared/services';


@Component({
    selector: 'app-auth-login-form',
    templateUrl: './auth-login-form.component.html',
    styleUrls: ['./auth-login-form.component.css']
})
export class AuthLoginFormComponent {

    constructor( private router: Router, private authSharedUserService: AuthSharedUserService) { }

    loginForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
    })

    public get controls() {
        return {
            email: this.loginForm.get('email') as FormControl<string>,
            password: this.loginForm.get('password') as FormControl<string>
        }
    }

    public onSubmit() {
        if(!this.loginForm.invalid) {
            this.authSharedUserService.loginUser(this.loginForm)
                .subscribe( (res) => {
                    console.log(res)
                    this.router.navigateByUrl('user/indicators');
                },
                error => {
                    console.log(error.error.message)
                    this.loginForm.setErrors(error.error.message)
                }   )
        }
    }
}
