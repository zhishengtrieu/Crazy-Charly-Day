TABLE Atelier
(
    id INT PRIMARY KEY,
    theme INT,
    nbPlaces INT,
    FOREIGN KEY (theme) REFERENCES Theme (id)
);