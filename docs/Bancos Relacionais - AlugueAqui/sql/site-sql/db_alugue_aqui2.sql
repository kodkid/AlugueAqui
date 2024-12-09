-- Criação do banco de dados
DROP DATABASE IF EXISTS db_alugue_aqui2;
CREATE DATABASE IF NOT EXISTS db_alugue_aqui2;

-- Uso do banco de dados criado
USE db_alugue_aqui2;

-- Criação da tabela usuarios
CREATE TABLE IF NOT EXISTS db_alugue_aqui2.usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    primeiro_nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    celular VARCHAR(20),
    senha VARCHAR(255) NOT NULL,
    genero ENUM('Feminino', 'Masculino', 'Outros', 'Prefiro não dizer') NOT NULL,
    token VARCHAR(255) NULL,  
    token_expiracao TIMESTAMP NULL, 
    ativo TINYINT(1) DEFAULT 0, 
    tipo_usuario ENUM('Pessoa Física', 'Pessoa Jurídica') NOT NULL, 
    cpf_cnpj VARCHAR(14) NOT NULL UNIQUE,  
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    foto_perfil VARCHAR(255) DEFAULT NULL,
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cep VARCHAR(10) NOT NULL
);


INSERT INTO db_alugue_aqui2.usuarios (
    primeiro_nome, sobrenome, email, celular, senha, genero, token, token_expiracao, ativo, tipo_usuario, cpf_cnpj, foto_perfil, endereco, bairro, cidade, estado, cep
) VALUES
-- Conta 1: Usuário Pessoa Física
('João', 'Silva', 'joao.silva@email.com', '999999999', '$2y$10$pTh7HnRBF9.odQBJCCmUQeZ337bXJF1ztkf8TKp0LiovuE02qDN1i', 'Masculino', NULL, NULL, 1, 'Pessoa Física', '12345678901', 'foto_joao.jpg', 'Rua Fictícia 123', 'Centro', 'São Paulo', 'SP', '01001000'),

-- Conta 2: Usuário Pessoa Jurídica
('Maria', 'Oliveira', 'maria.oliveira@empresa.com', '988888888', '$2y$10$pTh7HnRBF9.odQBJCCmUQeZ337bXJF1ztkf8TKp0LiovuE02qDN1i', 'Feminino', NULL, NULL, 1, 'Pessoa Jurídica', '12345678000195', 'foto_maria.jpg', 'Avenida Empresarial 456', 'Zona Industrial', 'Campinas', 'SP', '13000000'),

-- Conta 3: Usuário Pessoa Física
('Carlos', 'Pereira', 'carlos.pereira@email.com', '977777777', '$2y$10$pTh7HnRBF9.odQBJCCmUQeZ337bXJF1ztkf8TKp0LiovuE02qDN1i', 'Masculino', NULL, NULL, 1, 'Pessoa Física', '98765432100', 'foto_carlos.jpg', 'Rua dos Limoeiros 789', 'Jardim Boa Vista', 'Rio de Janeiro', 'RJ', '21000000'),

-- Conta 4: Usuário Pessoa Física
('Ana', 'Costa', 'ana.costa@email.com', '966666666', '$2y$10$pTh7HnRBF9.odQBJCCmUQeZ337bXJF1ztkf8TKp0LiovuE02qDN1i', 'Feminino', NULL, NULL, 1, 'Pessoa Física', '12345678910', 'foto_ana.jpg', 'Rua das Palmeiras 101', 'Vila Nova', 'Belo Horizonte', 'MG', '30100000'),

-- Conta 5: Usuário Pessoa Jurídica
('Eduardo', 'Mendes', 'eduardo.mendes@empresa.com', '955555555', '$2y$10$pTh7HnRBF9.odQBJCCmUQeZ337bXJF1ztkf8TKp0LiovuE02qDN1i', 'Masculino', NULL, NULL, 1, 'Pessoa Jurídica', '12345678000275', 'foto_eduardo.jpg', 'Rua Corporativa 202', 'Setor Comercial', 'Brasília', 'DF', '70000000');


-- Criação da tabela anuncios
CREATE TABLE IF NOT EXISTS db_alugue_aqui2.anuncios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,  
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255) DEFAULT NULL, 
    tempo_alocacao INT NOT NULL DEFAULT 0, 
    categoria VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL,
    fabricante VARCHAR(255) NOT NULL,
    ano_fabricacao INT NOT NULL,
    condicao ENUM('Nova', 'Usada') NOT NULL,
    disponibilidade ENUM('Disponível', 'Alugada', 'Manutenção', 'Reformada') NOT NULL,
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Anúncios para o usuário João Silva (id = 1) - Adicionando ferramentas
INSERT INTO db_alugue_aqui2.anuncios (
    usuario_id, titulo, descricao, preco, imagem, tempo_alocacao, categoria, modelo, fabricante, ano_fabricacao, condicao, disponibilidade
) VALUES
(1, 'Furadeira Bosch 500W', 'Furadeira Bosch 500W com controle de velocidade, ideal para perfurações em madeira, concreto e metal. Produto novo e em ótimo estado.', 350.00, 'furadeira_bosch_500W.jpg', 0, 'Ferramentas', 'GBM 500', 'Bosch', 2023, 'Nova', 'Disponível'),
(1, 'Serra Circular Dewalt 7 1/4"', 'Serra circular Dewalt 7 1/4" com motor de 1600W. Ideal para cortes em madeira e materiais mais densos.', 850.00, 'serra_circular_dewalt_7_1_4.jpg', 0, 'Ferramentas', 'DWS535', 'Dewalt', 2022, 'Nova', 'Disponível');

-- Anúncios para o usuário Maria Oliveira (id = 2) - Adicionando ferramentas
INSERT INTO db_alugue_aqui2.anuncios (
    usuario_id, titulo, descricao, preco, imagem, tempo_alocacao, categoria, modelo, fabricante, ano_fabricacao, condicao, disponibilidade
) VALUES
(2, 'Furadeira de Impacto Makita 710W', 'Furadeira de impacto Makita 710W com 2 velocidades e controle de velocidade variável. Ideal para trabalhos pesados.', 480.00, 'furadeira_de_impacto_makita_710W.jpg', 0, 'Ferramentas', 'HP1640', 'Makita', 2021, 'Nova', 'Disponível'),
(2, 'Lixadeira Orbital Black+Decker', 'Lixadeira orbital Black+Decker com potência de 300W e base de velcro. Perfeita para acabamento de superfícies.', 220.00, 'lixadeira_orbital_black_decker.jpg', 0, 'Ferramentas', 'BDEQS300', 'Black+Decker', 2022, 'Nova', 'Disponível');

-- Anúncios para o usuário Carlos Pereira (id = 3) - Adicionando ferramentas
INSERT INTO db_alugue_aqui2.anuncios (
    usuario_id, titulo, descricao, preco, imagem, tempo_alocacao, categoria, modelo, fabricante, ano_fabricacao, condicao, disponibilidade
) VALUES
(3, 'Parafusadeira/ Furadeira Elétrica Bosch', 'Parafusadeira/furadeira elétrica Bosch 12V, com bateria de lítio e 2 velocidades. Ideal para montagem e pequenos reparos.', 350.00, 'parafusadeira_furadeira_eletrica_bosch_12V.jpg', 0, 'Ferramentas', 'PSB 1200', 'Bosch', 2021, 'Nova', 'Disponível'),
(3, 'Esmerilhadeira Angular 115mm Makita', 'Esmerilhadeira angular Makita 115mm com motor de 850W e sistema de controle de vibração para maior conforto.', 450.00, 'esmerilhadeira_angular_115mm_makita.jpg', 0, 'Ferramentas', 'GA4530', 'Makita', 2020, 'Nova', 'Disponível');

-- Anúncios para a usuária Ana Costa (id = 4) - Adicionando ferramentas
INSERT INTO db_alugue_aqui2.anuncios (
    usuario_id, titulo, descricao, preco, imagem, tempo_alocacao, categoria, modelo, fabricante, ano_fabricacao, condicao, disponibilidade
) VALUES
(4, 'Furadeira Hammer Makita 750W', 'Furadeira Hammer Makita 750W com 3 funções: perfuração, impacto e parafusamento. Ideal para uso em construção e reforma.', 620.00, 'furadeira_hammer_makita_750W.jpg', 0, 'Ferramentas', 'HP2071', 'Makita', 2021, 'Nova', 'Disponível'),
(4, 'Chave Inglesa Irwin 12"', 'Chave inglesa de alta resistência Irwin de 12", ideal para apertos e desapertos em tubulações e peças metálicas.', 130.00, 'chave_inglesa_irwin_12.jpg', 0, 'Ferramentas', 'Record', 'Irwin', 2021, 'Nova', 'Disponível');

-- Anúncios para o usuário Eduardo Mendes (id = 5) - Adicionando ferramentas
INSERT INTO db_alugue_aqui2.anuncios (
    usuario_id, titulo, descricao, preco, imagem, tempo_alocacao, categoria, modelo, fabricante, ano_fabricacao, condicao, disponibilidade
) VALUES
(5, 'Furadeira de Impacto Skil 600W', 'Furadeira de impacto Skil 600W com punho auxiliar e sistema de fácil troca de brocas. Perfeita para perfurações em concreto e alvenaria.', 250.00, 'furadeira_de_impacto_skil_600W.jpg', 0, 'Ferramentas', 'FME6300', 'Skil', 2022, 'Nova', 'Disponível'),
(5, 'Martelo Demolidor Bosch 1500W', 'Martelo demolidor Bosch 1500W, ideal para remoção de concreto e tarefas pesadas em obras. Produto usado, mas em ótimo estado.', 1800.00, 'martelo_demolidor_bosch_1500W.jpg', 0, 'Ferramentas', 'GSH 11VC', 'Bosch', 2019, 'Usada', 'Disponível');


-- Criação da tabela carrinho com a nova coluna chave_pix
CREATE TABLE IF NOT EXISTS db_alugue_aqui2.carrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    anuncio_id INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    total DECIMAL(10, 2) NOT NULL DEFAULT 0.00, -- Adiciona a coluna total
    data_adicionado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    chave_pix VARCHAR(255), -- Adiciona a coluna para armazenar a chave PIX
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (anuncio_id) REFERENCES anuncios(id) ON DELETE CASCADE,
    anunciante_id INT NOT NULL -- Inclui a coluna anunciante_id
);



CREATE TABLE IF NOT EXISTS db_alugue_aqui2.pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    valor_pago DECIMAL(10, 2) NOT NULL,
    data_pagamento DATETIME NOT NULL,
    metodo_pagamento VARCHAR(50) NOT NULL,
    status_pagamento VARCHAR(20) DEFAULT 'Pendente',
    anuncio_id INT NOT NULL,
    usuario_id INT NOT NULL,  -- Usuário que está efetuando o pagamento
    anunciante_id INT NOT NULL,  -- Anunciante do item

    FOREIGN KEY (anuncio_id) REFERENCES anuncios(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (anunciante_id) REFERENCES usuarios(id)
);

ALTER TABLE pagamentos ADD devolvido TINYINT(1) DEFAULT 0;


CREATE TABLE IF NOT EXISTS db_alugue_aqui2.cartoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    numero_cartao VARCHAR(255) NOT NULL,  -- Armazenar hash do número do cartão
    nome_titular VARCHAR(100) NOT NULL,
    data_vencimento VARCHAR(5) NOT NULL,   -- Ex: "MM/AA"
    codigo_seguranca VARCHAR(10) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS db_alugue_aqui2.pix (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo_chave VARCHAR(50) NOT NULL,
    valor_chave VARCHAR(100) NOT NULL,
    nome_titular VARCHAR(100) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) -- Ajuste conforme o nome da tabela de usuários
);
-- Inserir dados fictícios na tabela pix
INSERT INTO db_alugue_aqui2.pix (
    usuario_id, tipo_chave, valor_chave, nome_titular
) VALUES
-- Chave PIX para o Usuário João Silva (id = 1)
(1, 'CPF', '12345678901', 'João Silva'),

-- Chave PIX para o Usuário Maria Oliveira (id = 2)
(2, 'CNPJ', '12345678000195', 'Maria Oliveira'),

-- Chave PIX para o Usuário Carlos Pereira (id = 3)
(3, 'CPF', '98765432100', 'Carlos Pereira'),

-- Chave PIX para a Usuária Ana Costa (id = 4)
(4, 'CPF', '12345678910', 'Ana Costa'),

-- Chave PIX para o Usuário Eduardo Mendes (id = 5)
(5, 'CNPJ', '12345678000275', 'Eduardo Mendes');

CREATE TABLE IF NOT EXISTS db_alugue_aqui2.conta_bancaria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    agencia VARCHAR(10) NOT NULL,
    conta VARCHAR(20) NOT NULL,
    nome_banco VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO db_alugue_aqui2.conta_bancaria (usuario_id, agencia, conta, nome_banco) VALUES
(1, '001', '12345-6', 'Banco do Brasil'),
(2, '002', '98765-4', 'Caixa Econômica Federal'),
(3, '010', '54321-0', 'Itaú Unibanco'),
(4, '021', '11111-2', 'Santander'),
(5, '025', '67890-1', 'Bradesco');
