import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from './http-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: HttpCacheService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log(req.method);

        // pass non cacheable requests
        if (req.method !== 'GET') {
            console.log(`Invalidating cache: ${req.method} ${req.url}`);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }

        // attempt to retrieve a cached response
        const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

        // return cached response
        if (cachedResponse) {
            console.log(`Returning a cached response: ${cachedResponse.url}`);
            console.log(cachedResponse);
            return of(cachedResponse);
        }

        this.cacheService.showCache();

        // send request to servers and add response to cache
        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        console.log(`Adding item to cache: ${req.url}`);
                        // this.cacheService.put(req.url, req.);
                    }
                })
            );

    }
}
