import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Sandwich } from "./sandwich";
import { SandwichService } from "./sandwich.service";



@Injectable({
    providedIn: 'root'
})
export class SandwichResolver implements Resolve<Sandwich[]> {

    constructor(private sandwichService: SandwichService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Sandwich[]> {
        return this.sandwichService.getSandwiches();
    }

}
