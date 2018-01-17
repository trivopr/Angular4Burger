import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { RouterStateSnapshot } from "@angular/router/src/router_state";

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated()
    }
}

