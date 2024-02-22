CREATE TABLE Candidature
(
    idCandidat INT,
    idAtelier INT,
    FOREIGN KEY (idCandidat) REFERENCES Candidat (id),
    FOREIGN KEY (idAtelier) REFERENCES Atelier (id),
    PRIMARY KEY (idCandidat, idAtelier)
);
