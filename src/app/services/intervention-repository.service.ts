import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Intervention } from "../metier/Intervention";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterventionRepositoryService {
  private interventionSubject: BehaviorSubject<Array<Intervention>>;

  constructor(private http: HttpClient) {
    this.interventionSubject = new BehaviorSubject([]);
  } 


  public getInterventionAsObservable() : Observable<Array<Intervention>> {
    return this.interventionSubject.asObservable();
  }


  public refreshListe(): void {
    // requette vers le serveur
    // il rapellera mon subscribe avec les données déjà convertie
    this.http.get<Array<Intervention>>("http://localhost:3000/interventions")
      .subscribe(data => {
        this.interventionSubject.next(data);
      });

  }
  public findById(id: number): Observable<Intervention> {
    return this.http.get<Intervention>(`http://localhost:3000/interventions/${id}`);
  }

  public deleteIntervention(id: number): void {
    this.http.delete(`http://localhost:3000/interventions/${id}`)
      .subscribe(resp => {
        this.refreshListe();
      });
  }

  public updateIntervention(intervention: Intervention): void {
    this.http.put(`http://localhost:3000/interventions/${intervention.id}`,
      intervention.toJson())
      .subscribe(resp => {
        this.refreshListe();
      });
  }


}