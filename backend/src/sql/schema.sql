CREATE TABLE IF NOT EXISTS atelier (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  capacite INT NOT NULL,
  image VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS candidat (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  enAttente BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS label (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS affectation
(
    idCandidat INT,
    idAtelier INT,
    PRIMARY KEY (idCandidat, idAtelier),
    FOREIGN KEY (idCandidat) REFERENCES candidat(id),
    FOREIGN KEY (idAtelier) REFERENCES atelier(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS allergie (
  idLabel INT NOT NULL,
  idCandidat INT NOT NULL,
  PRIMARY KEY (idLabel, idCandidat),
  FOREIGN KEY (idLabel) REFERENCES label(id),
  FOREIGN KEY (idCandidat) REFERENCES candidat(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS caracteristique (
  idLabel INT NOT NULL,
  idAtelier INT NOT NULL,
  PRIMARY KEY (idLabel, idAtelier),
  FOREIGN KEY (idLabel) REFERENCES label(id),
  FOREIGN KEY (idAtelier) REFERENCES atelier(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS preference (
  idLabel INT NOT NULL,
  idCandidat INT NOT NULL,
  PRIMARY KEY (idLabel, idCandidat),
  FOREIGN KEY (idLabel) REFERENCES label(id),
  FOREIGN KEY (idCandidat) REFERENCES candidat(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;