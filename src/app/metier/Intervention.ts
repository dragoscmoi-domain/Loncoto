export class Intervention {
    public constructor(public id: number,
        public date_planification: Date,
        public date_realisation: Date,
        public statut: String,
        public commentaire: String,
        public id_intervenant: number,
        public id_materiel: number) { }


    public copyFrom(source: Intervention) {
        this.id = source.id;
        this.date_planification = source.date_planification;
        this.date_realisation = source.date_realisation;
        this.statut = source.statut;
        this.commentaire = source.commentaire;
        this.id_intervenant = source.id_intervenant;
        this.id_materiel = source.id_materiel;
    }

    public toJson() {
        return {
            date_planification: this.date_planification,
            date_realisation: this.date_realisation,
            statut: this.statut,
            commentaire: this.commentaire
        };
    }

}
