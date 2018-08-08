export class Article{
    public constructor(
        public id:number,
        public nom : String,
        public id_sousFamille :number) {}    

        public copyFrom(source: Article) {
            this.id = source.id;
            this.nom = source.nom;
            this.id_sousFamille = source.id_sousFamille;
           
        }
    
        public toJson() {
            return {
                nom: this.nom
               
            };
        }


}