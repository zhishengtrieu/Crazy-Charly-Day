CREATE TABLE IF NOT EXISTS affectation
(
    idCandidat INT,
    idAtelier INT,
    PRIMARY KEY (idCandidat, idAtelier),
    FOREIGN KEY (idCandidat) REFERENCES candidat(id),
    FOREIGN KEY (idAtelier) REFERENCES atelier(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
