import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { InterventionListeComponent } from './components/intervention-liste/intervention-liste.component';
import { InterventionEditComponent } from './components/intervention-edit/intervention-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InterventionListeComponent,
    InterventionEditComponent,
    HomeComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'Intervention',component:InterventionListeComponent},
      {path:'edit',component:InterventionEditComponent},
      {path:'article',component:ArticleListComponent},
      {path:'',redirectTo:'/home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
