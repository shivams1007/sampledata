import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDocs } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { Observable, forkJoin, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    firestore: Firestore = inject(Firestore);

    constructor(@Inject(DOCUMENT) private doc: any, private title: Title, private meta: Meta,) { }
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

    generatesampelText(totalWords: number): Observable<string> {
        const characters = [
            "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog",
            "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
            "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna",
            "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco",
            "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure",
            "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat",
            "nulla", "pariatur", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa",
            "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
        ];
        let text = '';
        for (let i = 0; i < totalWords; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            text += characters[randomIndex] + ' ';
        }
        return of(text.trim());
    }

    setTitle(Meta_title: string) {
        this.title.setTitle(Meta_title);
    }

    setDescription(description: string) {
        this.meta.updateTag({ name: 'Description', content: description });
    }

    setKeywords(keywords: string) {
        this.meta.updateTag({ name: 'Keywords', content: keywords });
    }

    setPublisher() {
        this.meta.updateTag({ name: 'publisher', content: 'sample Data' });
    }

    setCanonicalURL() {
        const existingCanonicalLink = this.doc.querySelector('link[rel="canonical"]');
        if (existingCanonicalLink) {
            existingCanonicalLink.remove();
        }
        let link = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
        link.setAttribute('href', window.location.href);
        window.addEventListener('popstate', () => {
            link.setAttribute('href', window.location.href);
        });
    }

}
