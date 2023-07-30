export const courseTypes = {
    tech: "tech",
    language: "language"
}

export const courses = [
    {
        highlight: "#FF0000",
        type: courseTypes.tech,
        label: "Ensino Médio",
        title: "Instituto Federal de Mato Grosso",
        description: "",
        duration: "2017-2020",
        progress: 100,
    },
    {
        highlight: "#FF0000",
        type: courseTypes.tech,
        label: "Ensino Superior",
        title: "Universidade Federal de Mato Grosso do Sul",
        description: "Engenharia de Computação",
        duration: "2020-2024",
        progress: 80,
    },
    {
        type: courseTypes.tech,
        label: "Udemy",
        title: "Java e Programação Orientada a Objetos ",
        description: "",
        duration: "55h",
        progress: 100
    },
    {
        label: "Udemy",
        type: courseTypes.tech,
        title: "Spring & Hibernate for Beginners",
        description: "",
        duration: "43h",
        progress: 100
    }
    ,
    {
        label: "Udemy",
        type: courseTypes.tech,
        title: "JavaScript e Node.js",
        description: "",
        duration: "24h",
        progress: 100
    }
    ,
    {
        label: "",
        type: courseTypes.tech,
        title: "Bootstrap 5 do básico ao avançado",
        description: "",
        duration: "17h",
        progress: 100
    }
    ,
    {
        label: "Udemy",
        type: courseTypes.tech,
        title: "Spring Boot Expert: JPA, RESTFul API, Security, JWT",
        description: "",
        duration: "16h",
        progress: 100
    },
    {
        label: "",
        type: courseTypes.language,
        title: "Português",
        description: "Nativo",
        duration: "",
        progress: 100
    },
    {
        label: "",
        type: courseTypes.language,
        title: "Inglês",
        description: "Intermediário",
        duration: "",
        progress: 100
    }
];