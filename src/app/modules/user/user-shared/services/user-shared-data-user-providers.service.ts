import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IIndicators, IProvider} from '../types/user-shared-provider.interface';
import {IUserAccount, IUserAccountData, IUserAccountProviders} from "../types/user-shared-account.interface";

@Injectable({
    providedIn: 'root'
})
export class UserSharedDataUserProvidersService {

    constructor(private readonly http: HttpClient) {}

    fetchProviders(id: string | undefined): Observable<any> {
        return this.http.get<any>(environment.apiUrl + 'accountProviders/'+ id)
            .pipe( map((res:any) => res));
    }

    sendIndicators(indicators: IProvider, id: string | undefined): Observable<object> {
        return this.http.post<IIndicators>(environment.apiUrl +'transfer/' + id,
            [
                {
                    provider: 'd6bec95b-1345-44a0-9d85-64a038382005',
                    value: indicators.gasIndicator
                },
                {
                    provider: '38b5c1ab-24fb-4c4c-8351-5e9dcdcc8778',
                    value: indicators.energyIndicator
                },
                {
                    provider: '2f0906c2-9ffe-4327-9015-de9a483dcbeb',
                    value: indicators.tecIndicator
                },
                {
                    provider: 'c3f89ec7-ae6a-4c9a-8ee3-c9081c1b330b',
                    value: indicators.waterIndicator
                }
            ]
        )
            .pipe( map((res: IIndicators) => res));
    }
}
