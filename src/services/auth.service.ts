import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {
    constructor(private http: Http, public storage: Storage){
    }

    isLoggedIn(): boolean {
        const token = this.storage.get("token");
        if(token !== undefined){
            return true;
        }
        return false;
    }
}