const es = {
  nav: { about: 'Sobre Mí', projects: 'Proyectos', experience: 'Experiencia' },
  common: {
    languageLabel: 'Cambiar a inglés',
    language: 'Idioma',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
    openRepo: 'repositorio de código',
    prevShot: 'Captura anterior',
    nextShot: 'Siguiente captura',
    of: 'de',
    screenshots: 'capturas',
    close: 'Cerrar',
    zoomIn: 'Llenar la altura de la pantalla',
    zoomOut: 'Ajustar imagen a la pantalla',
    tapToZoom: 'Toca la imagen para hacer zoom',
    dragToExplore: 'Arrastra para explorar',
    enlargedImage: 'Imagen ampliada',
  },
  about: {
    badge: 'Sobre Mí y Educación',
    heading: 'Sobre Mí:',
    name: 'Adalberto Cerrillo Vázquez',
    role: 'Backend Developer',
    bio: 'Software Engineer con una sólida formación académica y una actitud proactiva para integrarse a equipos de trabajo enfocados en desarrollar soluciones innovadoras y de alta calidad. Cuento con un conocimiento destacado en desarrollo backend, desarrollo frontend, diseño de software y análisis de requerimientos. Durante mis estudios fui un estudiante sobresaliente, impulsado por el compromiso de mejorar continuamente mis conocimientos en tecnologías de vanguardia. Me caracterizo por mi espíritu creativo y mi enfoque en la resolución de problemas, utilizando el software de forma efectiva para lograr soluciones.',
    downloadCv: 'Descargar CV',
    cvFormat: 'PDF',
    openInBrowser: 'Abrir en el navegador',
    photoAlt: 'Sobre Mí',
  },
  skills: {
    heading: 'Habilidades',
    subheading: 'Tecnologías y Herramientas que Utilizo',
  },
  education: {
    heading: 'Educación:',
    university: 'Universidad Autónoma de Zacatecas',
    years: '(2020 - 2024)',
    body: 'Obtuve mi formación académica como Software Engineer en la Unidad Académica de Ingeniería Eléctrica de la Universidad Autónoma de Zacatecas. Fue ahí donde cultivé mi curiosidad y creatividad en el desarrollo de sistemas de software, además de adquirir conocimientos sólidos para desarrollar soluciones de alta calidad, siempre respaldadas por las mejores prácticas.',
    description: 'La Universidad Autónoma de Zacatecas Francisco García Salinas (UAZ) es la principal institución de educación superior de Zacatecas, México. Está organizada en áreas y unidades académicas enfocadas en la docencia, la investigación, la extensión y la gestión académica. La UAZ recibe a estudiantes de Zacatecas y de otros estados en campos como biología, humanidades, ingeniería, idiomas, artes, agronomía y ciencias exactas. La universidad promueve activamente la ciencia, la tecnología y la innovación.',
  },
  certifications: {
    heading: 'Certificaciones y Logros:',
    icp: 'Certificación Internet Computer (2023)',
    somece: 'CONGRESO INTERNACIONAL SOMECE 2024',
  },
  experience: {
    badge: 'Más de 2 Años de Experiencia',
    radii: {
      company: 'Radii Manufacturing',
      period: '(Jul 2025 - actualidad)',
      title: 'Founding Software Engineer',
      body: 'Founding Software Engineer en Radii Manufacturing, una startup que automatiza procesos de manufactura mediante una plataforma con inteligencia artificial y una red de fabricantes, y una de las startups más prometedoras de Latinoamérica. Defino la dirección técnica de la empresa junto al equipo fundador — el stack, la arquitectura y las prácticas de ingeniería sobre las que se construye la plataforma — convirtiendo un producto en etapa temprana en un sistema sobre el que el negocio puede escalar.',
    },
    freelance: {
      company: 'Programador Freelance',
      period: '(Ene 2025 - Jul 2025)',
      title: 'Freelance Software Developer',
      body: 'Desarrollé software para clientes como desarrollador independiente, trabajando dentro de equipos multidisciplinarios — diseñadores, expertos del dominio y otros ingenieros — para convertir problemas de negocio en sistemas que la gente realmente usa. Elegí tecnología de vanguardia y bien respaldada según el problema, no por costumbre, y me hice responsable del resultado desde la primera conversación hasta la entrega.',
    },
    labsol: {
      company: 'Labsol Network',
      period: '(Sep 2023 - Nov 2024)',
      title: 'Software Developer Intern',
      body: 'Formé parte del equipo del Laboratorio de Software Libre del COZCYT, donde lideré dos proyectos entregados a la Universidad Autónoma de Zacatecas y al Consejo Zacatecano de Ciencia, Tecnología e Innovación — ambos sustituyendo procesos manuales en papel por sistemas que su personal usa a diario. Ser responsable de la entrega de principio a fin afianzó mi desarrollo full-stack, análisis de requerimientos, diseño de software, pruebas y gestión de proyectos.',
    },
  },
  projects: {
    badge: 'Proyectos Destacados y Portafolio',
    pbienestar: {
      title: 'Sistema de Agendamiento de Citas',
      label: 'Punto Bienestar',
      body: 'Sistema de agendamiento de citas para una clínica de atención psicológica profesional. Los administradores gestionan la disponibilidad de los especialistas y revisan los detalles de cada cita antes de confirmarla, manteniendo el criterio clínico en el proceso en lugar de dejar el agendamiento a una cola automatizada. El sistema notifica por correo electrónico a pacientes, especialistas y administradores cada vez que una cita cambia, y registra las citas confirmadas en el Google Calendar de los usuarios mediante la API de Calendar, para que los recordatorios lleguen donde la gente ya los revisa. El acceso está protegido con autenticación JSON Web Token.',
    },
    cosiap: {
      title: 'Sistema de Apoyos COZCyT',
      label: 'Cosiap',
      body: 'Plataforma de gestión de apoyos económicos para el Consejo Zacatecano de Ciencia, Tecnología e Innovación. Antes de ella, cada solicitud de apoyo a la investigación y al emprendimiento se presentaba en papel y se revisaba a mano. La plataforma llevó el proceso completo a un entorno digital: los solicitantes suben su documentación y dan seguimiento a su trámite, mientras que los administradores revisan, comparan y resuelven las solicitudes desde una sola bandeja. Desarrollada durante mi periodo como becario en LABSOL Network, como parte del equipo encargado de la entrega.',
    },
    cargas: {
      title: 'Sistema de Cargas UAIE',
      label: 'Cargas',
      body: 'Plataforma de carga académica y horarios para la Facultad de Ingeniería Eléctrica de la Universidad Autónoma de Zacatecas. Los coordinadores de programa arman el horario de cada semestre, asignan profesores y concentran la información de los cursos en un solo lugar, mientras el sistema detecta conflictos entre profesores y grupos antes de publicar el horario — el problema para el que se encargó la plataforma. Desarrollada durante mi servicio social en LABSOL Network.',
    },
    bazarSol: {
      title: 'Bazar Sol',
      label: 'Bazar Sol',
      body: 'Plataforma de comercio electrónico para una tienda de ropa, desarrollada como proyecto universitario. Los administradores tienen el control del catálogo: dan de alta productos y ajustan precios y descripciones. Los clientes lo recorren, guardan una lista privada de favoritos y reservan artículos en un carrito para después — el paso de reserva es lo que la distingue de un simple escaparate, ya que el inventario queda apartado para un comprador que aún no ha pagado.',
    },
    rentazac: {
      title: 'RentaZac',
      label: 'RentaZac',
      body: 'Plataforma de renta de vivienda para la comunidad estudiantil de Zacatecas. Estudiantes y arrendadores de la ciudad coordinaban la renta de vivienda a través de publicaciones en redes sociales, donde los anuncios son imposibles de verificar y se pierden en el feed. RentaZac les da a ambos un espacio dedicado para publicar y buscar rentas, de modo que un estudiante que busca vivienda cerca del campus trabaja sobre un catálogo real en lugar de un scroll. Desarrollada como proyecto universitario con un equipo pequeño.',
    },
  },
};

export default es;
