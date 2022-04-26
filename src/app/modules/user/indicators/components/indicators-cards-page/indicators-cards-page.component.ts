import {Component, Input, OnInit} from '@angular/core';
import {IUserAccount} from "../../../personal-cabinet/types/user-account.interface";
import {PersonalCabinetService} from "../../../personal-cabinet/services";
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";

@Component({
    selector: 'app-indicators-cards-page',
    templateUrl: './indicators-cards-page.component.html',
    styleUrls: ['./indicators-cards-page.component.css']
})
export class IndicatorsCardsPageComponent implements OnInit {
    @Input() card!: IUserAccount
    constructor(private readonly personalCabinetService: PersonalCabinetService) { }

    ngOnInit(): void {

    }
    // indicatorsForm: FormGroup = new FormGroup({
    //     indicator: new FormControl<string>('', [
    //         Validators.required, Validators.pattern('') // додати валідатор на введення чисел
    //     ])
    // })
    //
    //
    // public get controls() {
    //     return {
    //         indicator: this.indicatorsForm.get('indicator') as FormControl<string>
    //     }
    // }
    //
    // onSubmit(): void {
    //     if(this.indicatorsForm.valid) {
    //         console.log( this.indicatorsForm.value)
    //         this.indicatorsForm.reset();
    //         alert('Показники відправлені')
    //     }
    // }
}
