CREATE TABLE Preferences (
    candidat_id INT,
    theme_code INT,
    FOREIGN KEY (candidat_id) REFERENCES Candidat(id),
    FOREIGN KEY (theme_code) REFERENCES Theme(id),
    PRIMARY KEY (candidat_id, theme_code)
);