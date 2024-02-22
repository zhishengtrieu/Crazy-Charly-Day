CREATE TABLE Atelier
(
    id INT PRIMARY KEY,
    nom VARCHAR(255),
    description TEXT,
    capacite INT,
    image VARCHAR(255),

    FOREIGN KEY (theme) REFERENCES Theme (id)
);
