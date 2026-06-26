export const routeStages = [
  {
    number: "01",
    title: "Base tecnica",
    intent: "Comprender la lógica antes del código",
    topics: [
      {
        label: "Fundamentos de programacion",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
      },
      {
        label: "Pseudocódigo y pensamiento algorítmico",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
      },
      {
        label: "Programacion basica",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/02-programacion-basica",
      },
    ],
    result:
      "Ejercicios simples, razonamiento paso a paso y primeras soluciones explicadas.",
    status: "Disponible",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
    action: "Entrar a fundamentos",
  },
  {
    number: "02",
    title: "Construccion de software",
    intent: "Organizar soluciones con criterio",
    topics: [
      {
        label: "POO",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
      },
      {
        label: "Estructuras de datos",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/04-estructuras-datos",
      },
      {
        label: "Algoritmos",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/05-algoritmos",
      },
    ],
    result:
      "Código más ordenado, estructuras reutilizables y solución de problemas con mejor diseño.",
    status: "En crecimiento",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
    action: "Ver avance",
  },
  {
    number: "03",
    title: "Web y datos",
    intent: "Conectar datos, web y documentación",
    topics: [
      {
        label: "Bases de datos",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
      },
      {
        label: "Desarrollo web",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
      },
      {
        label: "Git, GitHub y documentación técnica",
        href: "https://github.com/chiletedevpath/chiletedevpath/tree/main/docs",
      },
    ],
    result:
      "Practicas web, consultas de datos y repositorios documentados con contexto.",
    status: "Disponible",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
    action: "Abrir desarrollo web",
  },
  {
    number: "04",
    title: "Especializacion",
    intent: "Construir proyectos con alcance real",
    topics: [
      {
        label: "Patrones de diseno",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
      },
      {
        label: "Backend",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
      },
      {
        label: "Frontend moderno",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/10-frontend",
      },
      {
        label: "Proyectos integradores",
        href: "https://github.com/chiletedevpath/academia",
      },
    ],
    result:
      "Proyectos con arquitectura inicial, criterios de publicación y evidencia profesional.",
    status: "En revisión",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
    action: "Ver patrones",
  },
];

export const learningSections = [
  {
    title: "Fundamentos",
    status: "Disponible",
    description: "Base conceptual para iniciar la ruta con criterio y lenguaje comun.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
  },
  {
    title: "Pseudocódigo",
    status: "Disponible",
    description: "Ejercicios del curso de Principios de Algoritmos organizados para practicar lógica.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
  },
  {
    title: "Programacion basica",
    status: "Disponible",
    description: "Prácticas iniciales para traducir razonamiento a código ejecutable.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/02-programacion-basica",
  },
  {
    title: "POO",
    status: "Disponible",
    description: "Clases, objetos, encapsulamiento, herencia, abstraccion y polimorfismo.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
  },
  {
    title: "Estructuras de datos",
    status: "Disponible",
    description: "Listas, tablas hash y grafos para organizar información con criterio.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/04-estructuras-datos",
  },
  {
    title: "Algoritmos",
    status: "Disponible",
    description: "Busqueda, ordenamiento, recursion, backtracking y resolucion de problemas.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/05-algoritmos",
  },
  {
    title: "Bases de datos",
    status: "Disponible",
    description: "Modelado, SQL y criterios de publicación segura de datos.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
  },
  {
    title: "Desarrollo web",
    status: "Disponible",
    description: "HTML, CSS, JavaScript inicial y PHP desarrollado como avance academico.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    title: "Patrones de diseno",
    status: "Disponible",
    description: "SOLID, patrones creacionales, estructurales y casos integradores.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
  },
  {
    title: "Backend",
    status: "En revisión segura",
    description: "APIs, persistencia, seguridad, testing e integraciones con variables de entorno.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
  },
  {
    title: "Frontend moderno",
    status: "Reservado",
    description: "Se activará cuando existan prácticas reales revisadas y aprobadas.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/10-frontend",
  },
];

export const techStack = [
  {
    name: "HTML",
    tone: "markup",
    description: "Estructura semantica del contenido y base de accesibilidad.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    name: "CSS",
    tone: "style",
    description: "Layout responsive, jerarquia visual y sistema de temas.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    name: "JavaScript",
    tone: "script",
    description: "Interaccion, asincronia inicial y comportamiento en navegador.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    name: "PHP",
    tone: "server",
    description: "Formularios, ciclos, arreglos y procesamiento web básico.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web/php",
  },
  {
    name: "Java",
    tone: "java",
    description: "POO, estructuras, algoritmos, patrones y backend academico.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
  },
  {
    name: "SQL",
    tone: "data",
    description: "Modelado, consultas y criterio de datos seguros.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
  },
  {
    name: "Spring Boot",
    tone: "backend",
    description: "APIs, persistencia, seguridad, pruebas e integraciones.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
  },
  {
    name: "Astro",
    tone: "web",
    description: "Base estática de la web pública de Chilete DevPath.",
    href: "https://github.com/chiletedevpath/chiletedevpath.github.io",
  },
];
