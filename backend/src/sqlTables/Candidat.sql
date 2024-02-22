TABLE Candidat
(
    id INT PRIMARY KEY,
    prenom VARCHAR(255),
    nbAteliers INT,
    FOREIGN KEY (nbAteliers) REFERENCES Atelier (id)
);