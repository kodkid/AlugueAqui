DROP DATABASE IF EXISTS db_alugue_aqui1;
CREATE DATABASE IF NOT EXISTS db_alugue_aqui1;

CREATE TABLE IF NOT EXISTS db_alugue_aqui1.usuario (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idCarrinho INTEGER ,
    idPedidoAluguel INTEGER,
    idEquipamento INTEGER,
    nome VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    cpf VARCHAR(50),
    tipoUsuario VARCHAR(50),
    endereco VARCHAR(50),
    telefone VARCHAR(50),
    dataCadastro DATE
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui1.equipamento (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idUsuario  INTEGER ,
    idItemCarrinho INTEGER,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(50),
    categoria VARCHAR(50),
    modelo VARCHAR(50),
    fabricante VARCHAR(50),
    anoFabricacao VARCHAR(50),
    condicao VARCHAR(50),
    valorIgual INTEGER,
    disponibilidade VARCHAR(50),
    idPropietario VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui1.carrinho(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idItemCarrinho INTEGER,
    idUsuario INTEGER
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui1.itemCarrinho(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idCarrinho INTEGER,
    idEquipamento INTEGER
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui1.pedidoAluguel(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idUsuario INTEGER ,
    idPagamento INTEGER,
    pedidoAluguel VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui1.pagamento(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idPedido INTEGER,
    dataPagamento DATE
);
ALTER TABLE db_alugue_aqui1.usuario ADD CONSTRAINT fk_usuario_carrinho FOREIGN KEY (idCarrinho)
REFERENCES db_alugue_aqui1.carrinho(id);
ALTER TABLE db_alugue_aqui1.carrinho ADD CONSTRAINT fk_carrinho_usuario FOREIGN KEY (idUsuario)
REFERENCES db_alugue_aqui1.usuario(id);
ALTER TABLE db_alugue_aqui1.usuario ADD CONSTRAINT fk_usuario_pedidoAluguel FOREIGN KEY (idPedidoAluguel)
REFERENCES db_alugue_aqui1.pedidoAluguel(id);
ALTER TABLE db_alugue_aqui1.pedidoAluguel ADD CONSTRAINT fk_pedidoAluguel_usuario FOREIGN KEY (idUsuario)
REFERENCES db_alugue_aqui1.usuario(id);
ALTER TABLE db_alugue_aqui1.usuario ADD CONSTRAINT fk_usuario_equipamento FOREIGN KEY (idEquipamento)
REFERENCES db_alugue_aqui1.equipamento(id);
ALTER TABLE db_alugue_aqui1.equipamento ADD CONSTRAINT fk_equipamento_usuario FOREIGN KEY (idUsuario)
REFERENCES db_alugue_aqui1.usuario(id);
ALTER TABLE db_alugue_aqui1.itemCarrinho ADD CONSTRAINT fk_itemCarrinho_carrinho FOREIGN KEY (idCarrinho)
REFERENCES db_alugue_aqui1.carrinho(id);
ALTER TABLE db_alugue_aqui1.carrinho ADD CONSTRAINT fk_carrinho_itemCarrinho FOREIGN KEY (idItemCarrinho)
REFERENCES db_alugue_aqui1.itemCarrinho(id);
ALTER TABLE db_alugue_aqui1.itemCarrinho ADD CONSTRAINT fk_itemCarrinho_equipamento FOREIGN KEY (idEquipamento)
REFERENCES db_alugue_aqui1.equipamento(id);
ALTER TABLE db_alugue_aqui1.equipamento ADD CONSTRAINT fk_equipamento_itemCarrinho FOREIGN KEY (idItemCarrinho)
REFERENCES db_alugue_aqui1.itemCarrinho(id);
ALTER TABLE db_alugue_aqui1.pedidoAluguel ADD CONSTRAINT fk_pedidoAluguel_pagamento FOREIGN KEY (idPagamento)
REFERENCES db_alugue_aqui1.pagamento(id);
ALTER TABLE db_alugue_aqui1.pagamento ADD CONSTRAINT fk_pagamento_pedidoAluguel FOREIGN KEY (idPedido)
REFERENCES db_alugue_aqui1.pedidoAluguel(id);
-- ALTER TABLE db_alugue_aqui1.equipamento
-- DROP COLUMN idEquipamento;
