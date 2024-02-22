CREATE TABLE Atelier
(
    id INT PRIMARY KEY,
    theme INT,
    nbPlaces INT,
    image VARCHAR(255),
    FOREIGN KEY (theme) REFERENCES Theme (id)
);
