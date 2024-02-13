import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDocs } from '@angular/fire/firestore';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    firestore: Firestore = inject(Firestore);

    constructor() { }
    fetchData(): Observable<any> {
        const category = collection(this.firestore, 'category');
        return this.getItemsFromCollection(category);
    }

    private getItemsFromCollection(collectionRef: any): Observable<any[]> {
        return new Observable<any[]>(observer => {
            getDocs(collectionRef).then(querySnapshot => {
                const items: any[] = [];
                querySnapshot.forEach(doc => {
                    items.push(doc.data());
                });
                observer.next(items);
                observer.complete();
            }).catch(error => {
                observer.error(error);
            });
        });
    }
}
