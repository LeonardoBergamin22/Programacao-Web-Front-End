CREATE DATABASE banco_medico;

USE banco_medico;

CREATE TABLE paciente (
    nome VARCHAR(50),
    idade VARCHAR(50),
    data_de_nacimento DATE,
    prontuario Varchar(5000000)
    );
    
    CREATE TABLE medico (
    nome VARCHAR(50),
    especialidade VARCHAR(50)
    );
   
   
   
   INSERT INTO paciente (nome, idade, data_de_nacimeto,prontuario)
VALUES
    ('joao', '29', '20/3/1990', 'dengue'),
    ('maria', '23', '27/9/2012', 'gripe')
    
     INSERT INTO medico (nome, especilidade)
VALUES
    ('leon', 'clinico geral', ),
    ('cris', 'clinico geral', )
   




