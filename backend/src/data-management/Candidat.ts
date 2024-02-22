class Candidat {
    private id: number;
    private prenom: string;
    private nbAteliers: number;
    private preferences: Theme[];

    constructor(id: number, prenom: string, nbAteliers: number, preferences: Theme[]) {
        this.id = id;
        this.prenom = prenom;
        this.nbAteliers = nbAteliers;
        this.preferences = preferences;
    }
}