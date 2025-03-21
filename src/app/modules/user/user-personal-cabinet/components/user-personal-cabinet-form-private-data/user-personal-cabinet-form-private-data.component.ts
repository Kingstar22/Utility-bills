import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { IUserAuth} from '../../../../core/form/types/auth-shared-user-interface';
import { Subscription} from 'rxjs';
import { UserSharedDataUserService } from '../../../user-shared/services';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
import {Router} from "@angular/router";
import {UserSharedFloatingAlertComponent} from "../../../user-shared/components";

@Component({
    selector: 'app-user-personal-cabinet-form-private-data',
    templateUrl: './user-personal-cabinet-form-private-data.component.html',
    styleUrls: ['./user-personal-cabinet-form-private-data.component.css']
})
export class UserPersonalCabinetFormPrivateDataComponent implements OnInit, OnDestroy {

    @Input() public openAlert!: UserSharedFloatingAlertComponent;
    @Output() isChangeDataUser = new EventEmitter;

    private subscription: Subscription = new Subscription();

    constructor(private readonly userSharedDataUserService: UserSharedDataUserService) {}

    ngOnInit() {
        this.subscription.add(this.userSharedDataUserService.fetchDataUser()
            .subscribe( (res:IUserAuth) => {
                this.profileForm.patchValue({ email: res.email });
            }))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    profileForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        repeatPassword: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        oldPassword: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
    })

    public get controls() {
        return {
            email: this.profileForm.get('email') as FormControl<string>,
            password: this.profileForm.get('password') as FormControl<string>,
            repeatPassword: this.profileForm.get('repeatPassword') as FormControl<string>,
            oldPassword: this.profileForm.get('oldPassword') as FormControl<string>,
        }
    }

    onChangeDataUser() {
        if (!this.profileForm.invalid) {
            this.subscription.add(this.userSharedDataUserService.changeDataUser(this.profileForm)
                .subscribe( () => {
                    this.isChangeDataUser.emit();
                    this.openAlert.massage = 'Дані змінено!';
                    this.openAlert.showNotification();
                },
                error => {
                    this.openAlert.error = true;
                    this.openAlert.massage = 'Помилка! Спробуйте ще раз!';
                    this.openAlert.showNotification();
                }
                ))
        }
    }
}
