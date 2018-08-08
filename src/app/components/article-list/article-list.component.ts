import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ArticleRepositoryService } from "../../services/article-repository.service";
import { Article } from "../../metier/Article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articles :Observable<Array<Article>>;
  public articleEditId:number;

  constructor(private articleRepository:ArticleRepositoryService) { }

  ngOnInit() {
    this.articleEditId=0;
    this.articles=this.articleRepository.getArticleAsObservable();
    this.articleRepository.refreshListe();

  }

  public clickdeleteArticle(id: number) {
    this.articleRepository.deleteArticle(id);
  }

  public clickeditArticle(id: number) {
    // identifiant du livre a mettre dans le formulaire d'edition
    this.articleEditId = id;
  }



}
