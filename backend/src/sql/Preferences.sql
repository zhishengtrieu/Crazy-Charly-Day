CREATE TABLE Preferences (
    candidat_id INT,
    theme_code VARCHAR(10),
    FOREIGN KEY (candidat_id) REFERENCES Candidat(id),
    FOREIGN KEY (theme_code) REFERENCES Theme(code),
    PRIMARY KEY (candidat_id, theme_code)
);