import { baseUrl } from 'src/environments/environment';
import { Injectable } from '@angular/core'; 
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { map, finalize, catchError} from 'rxjs/operators'; 
import { AuthenticatorJwt } from './authenticatorJwt.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class HttpInterceptorService implements HttpInterceptor {

  baseUrl = baseUrl.url;

  constructor(private autenticadorJwt: AuthenticatorJwt) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.autenticadorJwt.getJWT();
    // Check the token to add it to the headers
    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) })
    }

    // Adds the headers
    // if (!req.headers.has('Content-Type')) {
    //   req = req.clone({ headers: req.headers.set('Content-type', 'application/json; charset=utf-8') })
    // }
    // req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    // req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
    // req = req.clone({ headers: req.headers.set('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS') });
    // req = req.clone({ headers: req.headers.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With') });

    // Creates the new url
    const newUrl = { url: this.baseUrl + req.url };
    req = Object.assign(req, newUrl);
    const newUrlWithParams = { urlWithParams: this.baseUrl + req.urlWithParams };
    req = Object.assign(req, newUrlWithParams);

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event ---> ', event)
        } return event;
      }),
      finalize(() => { })

      // Controls all the errors from the diferents services
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        }
        else {
          console.log('this is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
    );
  }
}
