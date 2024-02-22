CREATE TABLE Atelier
(
    id INT PRIMARY KEY,
    theme VARCHAR(10),
    nbPlaces INT,
    image VARCHAR(255),
    FOREIGN KEY (theme) REFERENCES Theme (code)
);
