CREATE TABLE Candidat
(
    idCandidat INT PRIMARY KEY,
    idAtelier INT PRIMARY KEY,
    FOREIGN KEY (idCandidat) REFERENCES Candidat (id),
    FOREIGN KEY (idAtelier) REFERENCES Atelier (id)
);
