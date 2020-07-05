import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../home/app.LoginPageModel';

@Injectable()
export class MyJwtInterceptor implements HttpInterceptor {
    constructor(private user: User) {  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     //add authorization header with jwt token if availabel
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${ this.user.token}`
                }
        });
       return next.handle(request);
    }
}