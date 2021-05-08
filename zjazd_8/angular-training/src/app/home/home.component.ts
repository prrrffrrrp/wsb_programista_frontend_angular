
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
    selector: 'wsb-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {   // OnInit wymage aby ngOnInit był zaimplementowany w klasie
    // This was used along with the this.usersService.getUsers(), .then(response...) from a few lines above.
    /*
     * public users: any = [];
     */

    /*
     * This can be used along with an 'async' pipe that was added to the home.component.html
     */
    public users: any = this.usersService.getUsers();

    constructor(public usersService: UsersService) {}

    public ngOnInit(): void {
        console.info('HomeComponent is ready!'); 

        // this.usersService.getUsers()
        // .then(response => {
        //     this.users = response;
        // });
            
    }

    public ngOnDestroy(): void {
        console.info('HomeComponent is destroyed!')
    }

}
