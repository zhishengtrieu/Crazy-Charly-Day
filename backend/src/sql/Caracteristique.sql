CREATE TABLE IF NOT EXISTS caracteristique (
  idLabel INT NOT NULL,
  idAtelier INT NOT NULL,
  PRIMARY KEY (idLabel, idAtelier),
  FOREIGN KEY (idLabel) REFERENCES label(id),
  FOREIGN KEY (idAtelier) REFERENCES atelier(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
