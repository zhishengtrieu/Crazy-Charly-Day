CREATE TABLE Candidat
(
    id INT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    FOREIGN KEY (nbAteliers) REFERENCES Atelier (id)
);
