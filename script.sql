DROP DATABASE IF EXISTS SOFTIA;
CREATE DATABASE SOFTIA;

USE SOFTIA;

create table if not exists Convention
(
    id      int         not null
        primary key auto_increment,
    nom     varchar(50) null,
    nbHeure int         null
);

INSERT INTO Convention (nom, nbHeure)
VALUES ('Conv 1', 500),
       ('Conv 2', 100),
       ('Conv 3', 1000);

create table if not exists Etudiant
(
    id           int         not null
        primary key auto_increment,
    nom          varchar(50) null,
    prenom       varchar(50) null,
    mail         varchar(50) null,
    idConvention int         null,
    constraint etudiant_ibfk_1
        foreign key (idConvention) references Convention (id)
);

INSERT INTO Etudiant (nom, prenom, mail, idConvention)
VALUES ('DOE', 'John', 'joshdoe@gmail.com', 1),
       ('DUPONT', 'Jean', 'jeandupont@gmail.com', 3),
       ('LOREM', 'Ipsum', 'loremipsum@gmail.com', 2);

create table if not exists Attestation
(
    id          int          not null
        primary key auto_increment,
    idEtudiant   int          null,
    idConvention int          null,
    message      varchar(250) null,
    constraint attestation_ibfk_1
        foreign key (idEtudiant) references Etudiant (id),
    constraint attestation_ibfk_2
        foreign key (idConvention) references Convention (id)
);

create index if not exists idConvention
    on Attestation (idConvention);

create index if not exists idEtudiant
    on Attestation (idEtudiant);

create index if not exists idConvention
    on Etudiant (idConvention);


