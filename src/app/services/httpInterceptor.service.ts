import { baseUrl } from 'src/environments/environment';
import { Injectable } from '@angular/core'; 
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { map, finalize} from 'rxjs/operators'; 
import { AuthenticatorJwt } from './authenticatorJwt.service';

@Injectable({ 
  providedIn: 'root' 
})
export class HttpInterceptorService implements HttpInterceptor {

  baseUrl = baseUrl.url;

  constructor(private autenticadorJwt: AuthenticatorJwt) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.autenticadorJwt.getJWT(); 
    if (token) { 
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) }); 
    }

    // if (!request.headers.has('Content-Type')) { 
    //   request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') }); 
    // }

    // request = request.clone({ headers: request.headers.set('Accept', 'application/json;') });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });

  
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD') });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Access-Control-Allow-Headers, Authorization, Content-Type, Accept') });

    const newUrl = {url: this.baseUrl + request.url}; 
    request = Object.assign(request, newUrl); 
    const newUrlWithParams = {urlWithParams: this.baseUrl + request.urlWithParams}; 
    request = Object.assign(request, newUrlWithParams);

    // console.log(request);
    console.log(request.urlWithParams)

    return next.handle(request).pipe( 
      map((event: HttpEvent<any>) => { 
        if (event instanceof HttpResponse) { 
          console.log('event--->>>', event); // Si utilizas esta línea obtendrás un log de todas las respuestas http recibidas en tu app 
        } return event; 
      }), 
      finalize(() => { 
      }) 
    );
  }
}
