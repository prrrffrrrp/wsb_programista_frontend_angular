import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {

    constructor(private httpClient: HttpClient) {}

    public getUsers() {
        return this.httpClient.get('http://localhost:3000/users').toPromise();
    }

}



