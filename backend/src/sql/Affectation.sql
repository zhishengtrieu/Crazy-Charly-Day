CREATE TABLE IF NOT EXISTS 'affectation'
(
    'idCandidat' INT PRIMARY KEY,
    'idAtelier' INT PRIMARY KEY,
    FOREIGN KEY ('idCandidat') REFERENCES 'candidat'('id'),
    FOREIGN KEY ('idAtelier') REFERENCES 'atelier'('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
