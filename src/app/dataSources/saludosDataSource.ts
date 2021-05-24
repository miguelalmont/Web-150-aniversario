import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";

import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Saludos } from "../models/models";
import { SaludosService } from "../services/saludos-service/saludos.service";

export class SaludosDataSource implements DataSource<Saludos> {

    private saludosSubject = new BehaviorSubject<Saludos[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
    public paginator: MatPaginator;
    public sort: any = 'asc';
    public filter: string = '';

    constructor(private saludosService: SaludosService){}

    connect(collectionViewer: CollectionViewer): Observable<Saludos[]> {
        return this.saludosSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.saludosSubject.complete();
        this.loadingSubject.complete();
    }

    LoadSaludos(){
        this.loadingSubject.next(true);

        this.saludosService.getSaludos().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(data => this.saludosSubject.next(data))
    }
}    