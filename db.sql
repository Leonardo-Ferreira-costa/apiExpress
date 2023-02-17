/* CRIAR O BANCO DE DADOS*/
CREATE DATABASE crudreactjs;

CREATE TABLE `livros` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` varchar(255),
  `descricao` varchar(255),
  `img` varchar(255),
  `preco` REAL(10,2),
  `criado_em` timestamp
);

INSERT INTO `livros`(`nome`, `descricao`, `img`, `preco`) VALUES ('A arte da guerra','"A guerra é um assunto de importância vital para o Estado; o reino da vida ou da morte; o caminho para a sobrevivência ou a ruína. É indispensável estudá-la profundamente." Sun Tzu','aartedaguerra.jpg','12.90');

