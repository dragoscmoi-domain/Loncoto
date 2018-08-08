import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { InterventionRepositoryService } from '../../services/intervention-repository.service';
import { Intervention } from '../../metier/Intervention';

@Component({
  selector: 'app-intervention-liste',
  templateUrl: './intervention-liste.component.html',
  styleUrls: ['./intervention-liste.component.css']
})
export class InterventionListeComponent implements OnInit {
  public interventions: Observable<Array<Intervention>>;
  public interventionEditId: number;

  constructor(private interventionRepository: InterventionRepositoryService) { }

  ngOnInit() {
    this.interventionEditId = 0;
    this.interventions = this.interventionRepository.getInterventionAsObservable();
    this.interventionRepository.refreshListe();
  }
  public clickdeleteIntervention(id: number) {
    this.interventionRepository.deleteIntervention(id);
  }

  public clickeditIntervention(id: number) {
    // identifiant du livre a mettre dans le formulaire d'edition
    this.interventionEditId = id;
  }


}
