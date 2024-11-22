DROP DATABASE IF EXISTS db_alugue_aqui;
CREATE DATABASE IF NOT EXISTS db_alugue_aqui;

CREATE TABLE IF NOT EXISTS db_alugue_aqui.usuario (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idCarrinho INTEGER ,
    idPedidoAluguel INTEGER,
    idEquipamento INTEGER,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cpf VARCHAR(50),
    tipoUsuario VARCHAR(50),
    endereco VARCHAR(50),
    telefone VARCHAR(50),
    dataCadastro DATE
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui.equipamento (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idUsuario  INTEGER ,
    idItemCaminho INTEGER,
    idEquipamento INTEGER,
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
CREATE TABLE IF NOT EXISTS db_alugue_aqui.carrinho(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idItemCarrinho INTEGER,
    idUsuario INTEGER
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui.itemCarrinho(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idCarrinho INTEGER,
    idEquipamento INTEGER
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui.pedidoAluguel(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idUsuario INTEGER ,
    idPagamento INTEGER,
    pedidoAluguel VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS db_alugue_aqui.pagamento(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idPedido INTEGER
);
ALTER TABLE db_alugue_aqui.usuario ADD CONSTRAINT fk_usuario_carrinho FOREIGN KEY (idCarrinho)
REFERENCES db_alugue_aqui.carrinho(id);
ALTER TABLE db_alugue_aqui.carrinho ADD CONSTRAINT fk_carrinho_usuario FOREIGN KEY (idUsuario)
REFERENCES db_alugue_aqui.usuario(id);
ALTER TABLE db_alugue_aqui.usuario ADD CONSTRAINT fk_usuario_pedidoAluguel FOREIGN KEY (idPedidoAluguel)
REFERENCES db_alugue_aqui.pedidoAluguel(id);
ALTER TABLE db_alugue_aqui.pedidoAluguel ADD CONSTRAINT fk_pedidoAluguel_usuario FOREIGN KEY (idUsuario)
REFERENCES db_alugue_aqui.usuario(id);