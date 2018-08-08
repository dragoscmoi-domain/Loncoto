import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from "../metier/Article";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService {
  private articleSubject: BehaviorSubject<Array<Article>>;

  constructor(private http: HttpClient) {
    this.articleSubject = new BehaviorSubject([]);
  } 

  public getArticleAsObservable() : Observable<Array<Article>> {
    return this.articleSubject.asObservable();
  }

  public refreshListe(): void {
    // requette vers le serveur
    // il rapellera mon subscribe avec les données déjà convertie
    this.http.get<Array<Article>>("http://localhost:3000/articles")
      .subscribe(data => {
        this.articleSubject.next(data);
      });

    }
  
    public deleteArticle(id: number): void {
      this.http.delete(`http://localhost:3000/articles/${id}`)
        .subscribe(resp => {
          this.refreshListe();
        });
    }

    public findById(id: number): Observable<Article> {
      return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
    }

    public updateArticle(article: Article): void {
      this.http.put(`http://localhost:3000/articles/${article.id}`,
        article.toJson())
        .subscribe(resp => {
          this.refreshListe();
        });
    }

}
