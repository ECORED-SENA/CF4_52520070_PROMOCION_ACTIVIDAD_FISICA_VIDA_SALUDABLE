export default {
  global: {
    componenteFormativo: 'Hábitos y vida saludable',
    descripcionCurso:
      'Este componente formativo de formación aborda la promoción de la actividad física y estilos de vida saludable. Proporciona estrategias para fomentar hábitos saludables, con recomendaciones sobre nutrición, ejercicio, lactancia, y bienestar. Incluye guías para reducir el sedentarismo y prevenir enfermedades no transmisibles (ENT). Además, resalta la importancia del entorno familiar, políticas públicas, y la tecnología en la adopción de un estilo de vida activo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Hábitos saludables en la actividad física ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Vida saludable ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recomendaciones nutricionales ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Promoción de la alimentación saludable ',
            hash: 't_1_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Hábitos saludables en la actividad física ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). Hábitos saludables mediante actividad física. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bZb3VYvBHFA  ',
    },
    {
      tema: 'Hábitos saludables en la actividad física ',
      referencia:
        'MinSalud. (2021). La importancia de la actividad física como hábito de vida saludable. ',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/Paginas/La-importancia-de-la-actividad-fisica-como-habito-de-vida-saludable.aspx  ',
    },
    {
      tema: 'Vida saludable ',
      referencia:
        'Fundación Aprende con Reyhan. (2020). Estilos de vida saludable. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XMqNA_zpsPg  ',
    },
    {
      tema: 'Recomendaciones nutricionales ',
      referencia:
        'CENTERS FOR DISEASE CONTROL AND PREVENTION. (2022). Consejos para una alimentación saludable.',
      tipo: 'Página web',
      link:
        'https://www.cdc.gov/nccdphp/dnpao/features/healthy-eating-tips/index-es.html  ',
    },
    {
      tema: 'Promoción de la alimentación saludable ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). El plato saludable de la familia colombiana.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3RGixpov5yU  ',
    },
  ],
  glosario: [
    {
      termino: 'Actividad física',
      significado:
        'movimiento corporal que mejora la salud y reduce el riesgo de enfermedades. ',
    },
    {
      termino: 'Ciclovía Recreativa',
      significado:
        'programa comunitario en el que se cierran calles para fomentar la actividad física. ',
    },
    {
      termino: 'ENT (enfermedades no transmisibles)',
      significado:
        'enfermedades crónicas que no se contagian, como la diabetes o enfermedades cardiovasculares. ',
    },
    {
      termino: 'Estilo de vida saludable',
      significado:
        'conjunto de actividades y decisiones que impactan positivamente en la salud general. ',
    },
    {
      termino: 'Hábitos saludables',
      significado:
        'comportamientos que promueven el bienestar físico, mental y social. ',
    },
    {
      termino: 'Lactancia materna',
      significado:
        'alimentación de los lactantes exclusivamente con leche materna durante los primeros meses. ',
    },
    {
      termino: 'MET (equivalente metabólico)',
      significado:
        'unidad utilizada para medir el gasto energético durante la actividad física. ',
    },
    {
      termino: 'Nutrición adecuada',
      significado:
        'ingesta balanceada de nutrientes que favorece el crecimiento y la prevención de enfermedades. ',
    },
    {
      termino: 'Pausas activas',
      significado:
        'breves periodos de ejercicio durante actividades sedentarias para mejorar la salud. ',
    },
    {
      termino: 'Sedentarismo',
      significado:
        'estilo de vida con poca actividad física que aumenta el riesgo de enfermedades. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Anta, R. M. O., López-Sobaler, A. M., y Pérez-Farinós, N. (2013). Associated factors of obesity in Spanish representative samples. <em>Nutrición Hospitalaria</em>, 28(Supl 5), 56-62. ',
      link: '',
    },
    {
      referencia:
        'Carrión, C., Moliner, L. A., Castell, C., Puigdomènech, E., Gómez, S. F., Domingo, L., y Espallargues, M. (2016). Utilización del teléfono móvil para el fomento de hábitos saludables en adolescentes: Estudio con grupos focales. <em>Revista Española de Salud Pública</em>, 90(3), e11. ',
      link: '',
    },
    {
      referencia:
        'Corrales, A. R. (2009). Hábitos saludables de la población relacionados con la actividad física como ocio. <em>Trances</em>, 1(2), 80-91. ',
      link: '',
    },
    {
      referencia:
        'Cubero, J., Guerra, S., Calderón, M. A., Luengo, L. M., Pozo, A., y Ruiz, C. (2014). Análisis del desayuno escolar en la provincia de Badajoz (España). <em>Revista Española de Nutrición Comunitaria</em>, 51-56. ',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo del Deporte, la Recreación, la Actividad Física y el Aprovechamiento del Tiempo Libre - Coldeportes. (2014). <em>Ampliación de oportunidades de actividad física para los niños y niñas de la primera infancia en Colombia</em>. ',
      link: '',
    },
    {
      referencia:
        "Dick, B., y Ferguson, B. J. (2015). Health for the world's adolescents: A second chance in the second decade. <em>Journal of Adolescent Health</em>, 56(1), 3-6. ",
      link: '',
    },
    {
      referencia:
        'Garber, C. E., Blissmer, B., Deschenes, M. R., Franklin, B. A., Lamonte, M. J., Lee, I. M., y Swain, D. P. (2011). American College of Sports Medicine position stand: Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults: Guidance for prescribing exercise. <em>Medicine and Science in Sports and Exercise</em>, 43(7), 1334-1359.',
      link: '',
    },
    {
      referencia:
        'García, J. C. S., Rodríguez-Blanque, R., Villar, N. M., Sánchez-López, A. M., Hernández, M. C. L., y Aguilar-Cordero, M. J. (2016). Influencia del ejercicio físico sobre la calidad de vida durante el embarazo y el posparto: Revisión sistemática. <em>Nutrición Hospitalaria</em>, 33(5), 3-6. ',
      link: '',
    },
    {
      referencia:
        'Gómez, J. C. (2016). Actividad física y factores de riesgo cardiovascular en niños y adolescentes. <em>VIREF Revista de Educación Física</em>, 5(1), 70-86. ',
      link: '',
    },
    {
      referencia:
        'González-Jiménez, E., Cañadas, G. R., Fernández-Castillo, R., y Cañadas-De la Fuente, G. A. (2013). Analysis of the lifestyle and dietary habits of a population of adolescents. <em>Nutrición Hospitalaria</em>, 28(6), 1937-1942. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy del Pilar Aguirre Caicedo ',
          cargo: 'Experta temática  ',
          centro: 'Regional Risaralda - Centro de Comercio y Servicios ',
        },
        {
          nombre: 'Paola Alexandra Moya  ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos ddigitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
