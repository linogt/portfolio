const tagTitleTech = "tecnologias";
import google from '../assets/googlebanner.png';
import supera from '../assets/superabanner.png';
import clientes from '../assets/clientesbanner.png';
import tabela from '../assets/tabelabanner.png';
import pagmob from '../assets/testepagmob.jpeg';
import shopping from '../assets/shoppingbanner.png'
import web from '../assets/webbanner.png'

export const project = [
    {
        title: "Desafio Técnico Pagmob",
        description: "Desafio proposto pela empresa Pagmob, atual empresa que estou estagiando, o projeto consiste na criação de um back-end e front-end utilizando Spring e Angular, que consuma uma rota exibindo os dados dos veículos que chegam em determinada rota de ônibus e atualizando esses dados a cada 30 segundos.",
        tagTitle: tagTitleTech,
        imagem: pagmob,
        tags: ["Java", "Spring", "TypeScript", "Angular", "HTML","CSS","Bootstrap"],
        year: "https://github.com/linogt/teste-pagmob",
    },
    {
        title: "CRUD Clientes",
        description: "O projeto consiste na criação de uma API e uma interface para um banco de dados de cadastro de clientes utilizando os frameworks Spring e Angular.",
        tagTitle: tagTitleTech,
        imagem: clientes,
        tags: ["Java", "Spring", "TypeScript", "Angular", "HTML","CSS","Bootstrap"],
        year: "https://github.com/linogt/project-spring-angular",
    },
    {
        title: "Backend Clientes, Pedidos e Produtos",
        description: "O projeto consiste na criação de uma api em Java que armazena clientes, pedidos e os produtos que estão contidos nesse pedido.",
        tagTitle: tagTitleTech,
        imagem: tabela,
        tags: ["Java", "Spring",],
        year: "https://github.com/linogt/clientes-e-pedidos-spring-boot",
    },
    {
        title: "Shopping Site",
        description: "Site para adicionar items em um catálogo.",
        tagTitle: tagTitleTech,
        imagem: shopping,
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQLite", "Node.js", "Express", "Express-Handlebars","Sequelize"],
        year: "https://github.com/linogt/shopping-site",
    },
    {
        title: "Desafio Técnico Supera",
        description: "Desafio Técnico proposto pela empresa Supera. O projeto consiste na criação de um backend e frontend, utilizando os frameworks Spring e React, que possibilite a visualização dos dados da tabela “TRANSFERENCIA” podendo também filtrar tais dados por meio da “Data de Transferência” e pelo “Nome do Operador Transacionado”.",
        tagTitle: tagTitleTech,
        imagem: supera,
        tags: ["Java", "Spring", "H2", "Bootstrap", "SQL", "Hibernate", "JPA", "React","JavaScript"],
        year: "https://github.com/linogt/supera-desafio-frontend",
    },
    {
        title: "Web Customer Tracker",
        description: "Projeto proposto pelo professor Chad Darby dedicado a criação de uma página web que cumpra as funções de inserção, remoção e atualização de usuários de um banco de dados.",
        tagTitle: tagTitleTech,
        imagem: web,
        tags: ["Java", "Spring", "Hibernate", "SQL"],
        year: "https://github.com/linogt/web_customer_tracker",
    },
    {
        title: "Automate Tests Google Search Page",
        description: "Desafio Técnico que consiste na construção de um projeto de Automatização de Testes da Página de Busca do Google utilizando a tecnologia Selenium WebDriver na linguagem C#.",
        tagTitle: tagTitleTech,
        imagem: google,
        tags: ["C#", "Selenium WebDriver", "Selenium Grid", "Docker", "NUnit"],
        year: "https://github.com/linogt/automate-tests-google-search-page",
    },
];