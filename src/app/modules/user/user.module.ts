import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routing.module';
import { PersonalCabinetModule } from './personal-cabinet/personal-cabinet.module';
import { indicatorsModule } from './indicators/indicators.module';
import { UserSharedModule } from './user-shared/user-shared.module';
import {UserProfileModule} from "./user-profile/user-profile.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PersonalCabinetModule,
        indicatorsModule,
        UserSharedModule,
        UserProfileModule,
        RouterModule.forChild(userRoutes)
    ]
})
export class UserModule {
}
