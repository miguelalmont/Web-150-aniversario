import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";

import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Historia } from "../models/historia";
import { HistoriaService } from "../services/historia-service/historia.service";

export class HistoriaDataSource implements DataSource<Historia> {

    private historiasSubject = new BehaviorSubject<Historia[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public paginator: MatPaginator;
    public sort: any = 'asc';
    public filter: string = '';

    constructor(private historiaService: HistoriaService) {}

    connect(collectionViewer: CollectionViewer): Observable<Historia[]> {
        return this.historiasSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.historiasSubject.complete();
        this.loadingSubject.complete();
    }

    loadHistorias() {
        this.loadingSubject.next(true);

        this.historiaService.getHistorias().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(data => this.historiasSubject.next(data));
    }    
}