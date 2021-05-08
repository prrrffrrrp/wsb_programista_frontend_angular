import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";



@Injectable({
    providedIn: 'root'
})
export class SpecialGuard implements CanActivate {

    // constructor(private sandwichService: SandwichService) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // const sandwichId = Number(route.params.id);
        const sandwichId = parseInt(route.params.id);
        return sandwichId < 4;
    }

}
