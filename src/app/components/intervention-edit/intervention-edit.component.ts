import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Intervention } from "../../metier/Intervention";
import { InterventionRepositoryService } from '../../services/intervention-repository.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-intervention-edit',
  templateUrl: './intervention-edit.component.html',
  styleUrls: ['./intervention-edit.component.css']
})
export class InterventionEditComponent implements OnInit, OnChanges {

  @Input() public editId: number;
  public currentIntervention: Intervention;

  constructor(private interventionRepository: InterventionRepositoryService
    ,private ActivatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.currentIntervention = new Intervention(0, new Date(), new Date(), " ", " ", 0, 0);
    this.ActivatedRoute.params.subscribe(values => {
      this.editId = parseInt(values["id"])
    });
  }

  ngOnChanges(changes: any) {
    if (this.editId == 0) {
      this.currentIntervention = new Intervention(0, new Date(), new Date(), " ", " ", 0, 0);
    }
    else {
      this.interventionRepository.findById(this.editId)
        .subscribe(intervention => {
          this.currentIntervention = intervention;
        });
    }
  }

  public saveIntervention() {
    if (this.currentIntervention.id > 0) {
      let interventionToSave = new Intervention(0,  new Date(), new Date(), " ", " ", 0, 0);

      // retransformation du modele/json du formulaire
      // en veritable objet Livre avec ses méthodes
      interventionToSave.copyFrom(this.currentIntervention);

      this.interventionRepository.updateIntervention(interventionToSave);
      this.currentIntervention = new Intervention(0,  new Date(), new Date(), " ", " ", 0, 0);
    }
  }






}
