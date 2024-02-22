class Theme {
    private code: string;
    private nom: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.nom = name;
    }

    public static IT = new Theme("IT", "Cuisine italienne");
    public static FR = new Theme("FR", "Cuisine française");
    public static MEX = new Theme("MEX", "Cuisine d’Amérique du Sud");
    public static JP = new Theme("JP", "Cuisine japonaise");
    public static OR = new Theme("OR", "Cuisine orientale");
    public static GR = new Theme("GR", "Cuisine grecque");
}