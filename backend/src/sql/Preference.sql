CREATE TABLE IF NOT EXISTS preference (
  idLabel INT NOT NULL,
  idCandidat INT NOT NULL,
  PRIMARY KEY (idLabel, idCandidat),
  FOREIGN KEY (idLabel) REFERENCES label(id),
  FOREIGN KEY (idCandidat) REFERENCES candidat(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
