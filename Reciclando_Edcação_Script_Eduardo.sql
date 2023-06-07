show databases;

drop database db_reciclando_educacao;

create database db_reciclando_educacao;

use db_reciclando_educacao;

#/////////////////////////////////TABELAS SEM FK/////////////////////////////
create table tbl_projetos(
	id int not null primary key auto_increment,
    imagem varchar(255) not null,
    titulo varchar(50) not null,
    descricao text not null,
    status_projeto boolean,
    unique index(id)
);

create table tbl_tipo_telefone(
	id int not null primary key auto_increment,
    tipo varchar(50),
    unique index(id)
);

create table tbl_estado(
	id int not null primary key auto_increment,
	nome_estado varchar(100) not null,
    unique index(id)
);

create table tbl_periodo(
	id int not null primary key auto_increment,
	periodo varchar(200) not null,
    unique index(id)
);


#///////////////////////////////////TABELAS COM FK///////////////////////////////////////
select * from tbl_telefone where telefone = "321";
create table tbl_telefone(
	id int not null primary key auto_increment,
    telefone varchar(50),
    id_tipo_telefone int not null,
    
    #FK da tbl tipo telefone para telefone
    constraint FK_TipoTelefone_Telefone
    foreign key(id_tipo_telefone)
    references tbl_tipo_telefone(id),
    
    unique index(id)
);



create table tbl_cidade(
	id int not null primary key auto_increment,
    nome_cidade varchar(100) not null,
    id_estado int not null,
    
    #FK da tbl estado para cidade
    constraint FK_Estado_Cidade
    foreign key(id_estado)
    references tbl_estado(id),
    
	unique index(id)
);

create table tbl_endereco(
	id int not null primary key auto_increment,
    logradouro varchar(50) not null,
    cep varchar(15),
    bairro varchar(200),
    id_cidade int not null,

	#FK da tbl cidade para endereco
    constraint FK_Cidade_Endereco
    foreign key(id_cidade)
    references tbl_cidade(id),

	unique index(id)
);

create table tbl_colaboradores(
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(50),
    id_telefone int not null,
    id_endereco int not null,

	#FK da tbl telefone para colaborador
    constraint FK_Telefone_Colaborador
    foreign key(id_telefone)
    references tbl_telefone(id),

	#FK da tbl endereco para colaborador
    constraint FK_Endereco_Colaborador
    foreign key(id_endereco)
    references tbl_endereco(id),

	unique index(id)
);
create table tbl_login(
	id int not null primary key auto_increment,
    nome varchar(200) not null,
    senha varchar(25) not null,
    email varchar(255)
);

create table tbl_material(
	id int not null primary key auto_increment,
    toxico boolean not null,
    tipo_material varchar(100) not null,
    
    unique index(id)
);
select * from tbl_material;
insert into tbl_material (toxico,tipo_material) values (false,'plastico');
drop table tbl_material;

show tables;

create table tbl_contribuente(
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(45) not null,
    email varchar(255) not null,
    id_telefone varchar(50) not null,
    id_endereco varchar(255) not null,
    
	unique index(id)
);

create table tbl_empresa(
	id int not null primary key auto_increment,
    nome varchar(250) not null,
    email varchar(250) not null,
    cnpj varchar(250) not null,
    id_telefone varchar(100) null,
    id_endereco varchar(100) null,
    id_material int not null,
    id_periodo varchar(100) not null,
    
    
    #FK da tbl material para empresa 
    constraint FK_Material_Empresa
    foreign key(id_material)
    references tbl_material(id),
    

    
	unique index(id)
);

create table tbl_pontos_de_coleta(
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    id_endereco int not null,
    
    #FK da tbl endereco para ponto_coleta
    constraint FK_Endereco_PontoColeta
    foreign key(id_endereco)
    references tbl_endereco(id),
    
    unique index(id)
);

select * from tbl_telefone;


create table tbl_chegada_material(
	id int not null primary key auto_increment,
    quantidade varchar(250) not null,
    data_chegada date not null,
    qual_doador varchar(250) not null,
    id_material int not null,
    ponto_de_coleta varchar(250) not null,
    
    #FK da tbl material para ponto_coleta
    constraint FK_material_PontoColeta
    foreign key(id_material)
    references tbl_material(id),
    
    unique index(id)
);


#///////////////////////////////////////////TABELA INTERMEDIARIA/////////////////////////////////////////////////


create table tbl_chegada_material_empresa(
	id int not null primary key auto_increment,
    id_chegada_material int not null,
    id_empresa int not null,
	
     #FK da tbl chegada material para empresa
    constraint FK_Chegada_Material_Empresa
    foreign key(id_chegada_material)
    references tbl_chegada_material(id),
	
     #FK da tbl empresa chgada material
    constraint FK_Empresa_ChegadaMaterial
    foreign key(id_empresa)
    references tbl_empresa(id),
	
	
	unique index (id)
);

create table tbl_ponto_de_coleta_material(
	id int not null primary key auto_increment,
    id_pontos_de_coleta int not null,
    id_material int not null,
	
     #FK da tbl chegada material para empresa
    constraint FK_PontosDeColeta_Material
    foreign key(id_pontos_de_coleta)
    references tbl_pontos_de_coleta(id),
	
     #FK da tbl empresa chgada material
    constraint FK_Material_PontosDeColeta
    foreign key(id_material)
    references tbl_material(id),
	
	
	unique index (id)
);

create table tbl_comtribuemte_chegada_material(
	id int not null primary key auto_increment,
    id_contribuente int not null,
    id_chegada_material int not null,
	
     #FK da tbl chegada material para empresa
    constraint FK_Contribuente_Material
    foreign key(id_contribuente)
    references tbl_contribuente(id),
	
     #FK da tbl empresa chgada material
    constraint FK_Chegada_Material_Contribuente
    foreign key(id_chegada_material)
    references tbl_chegada_material(id),
	
	
	unique index (id)
);



#drop table;

show tables;
#/////////////////////////////////SELECT DAS TABELAS SEM FK/////////////////////////////

select * from tbl_projetos;
select * from tbl_tipo_telefone;
select * from tbl_estado;
select * from tbl_data_coleta;
select * from tbl_tipo_material;

#///////////////////////////////////SELECT DAS TABELAS COM FK///////////////////////////////////////

select * from tbl_telefone;
select * from tbl_cidade;
select * from tbl_endereco;
select * from tbl_colaboradores;
select * from tbl_login;
select * from tbl_material;
select * from tbl_contribuente;
select * from tbl_empresa;
select * from tbl_pontos_de_coleta;
select * from tbl_chegada_material;

#///////////////////////////////////////////SELECT DAS TABELAS INTERMEDIARIA/////////////////////////////////////////////////

select * from tbl_chegada_material_empresa;
select * from tbl_ponto_de_coleta_material;
select * from tbl_comtribuemte_chegada_material;
 desc tbl_login;
 
insert into tbl_login
	(nome,
    senha,
    email) values ('Ana', '123', 'ana123@gmail.com');

show tables;

use db_reciclando_educacao;

select * from tbl_login where nome = "Ana";

SET FOREIGN_KEY_CHECKS=0; DROP TABLE tbl_chegada_material; SET FOREIGN_KEY_CHECKS=1;

select * from tbl_material where tipo_material = "madeira"
