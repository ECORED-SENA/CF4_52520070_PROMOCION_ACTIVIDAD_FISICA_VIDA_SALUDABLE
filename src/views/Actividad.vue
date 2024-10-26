<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Promoción de actividad física y hábitos saludables ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar las estrategias de promoción de la actividad física, hábitos de vida saludables y recomendaciones nutricionales. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los hábitos considerados como factor protector para conservar un estilo de vida saludable? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comer sin horarios definidos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Práctica continua de actividad física. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dormir menos de 6 horas al día. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar actividades de baja intensidad. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué unidad se utiliza para medir el gasto energético en la actividad física? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'MET (equivalente metabólico). ',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Joules. ', esCorrecta: false },
            { id: 'c', texto: 'Mililitros. ', esCorrecta: false },
            { id: 'd', texto: 'Newtons. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué cantidad mínima de frutas y verduras se recomienda consumir diariamente según la OMS? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '100 gramos. ', esCorrecta: false },
            { id: 'b', texto: '400 gramos. ', esCorrecta: true },
            { id: 'c', texto: '600 gramos. ', esCorrecta: false },
            { id: 'd', texto: '200 gramos. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué práctica es fundamental para el crecimiento sano y desarrollo cognitivo en los primeros años de vida? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Iniciar con alimentos sólidos antes de los 3 meses. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Evitar la leche materna. ', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Lactancia materna exclusiva durante los primeros 6 meses. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Alimentar al bebé con jugos de frutas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué programa comunitario se menciona en el documento para promover la actividad física en Bogotá? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programa de Caminata Saludable. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Maratón Escolar. ', esCorrecta: false },
            { id: 'c', texto: 'Ciclovía Recreativa. ', esCorrecta: true },
            {
              id: 'd',
              texto: 'Red de Natación Comunitaria. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el porcentaje máximo recomendado de ingesta calórica proveniente de grasas? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '30%.', esCorrecta: true },
            { id: 'b', texto: '50%.', esCorrecta: false },
            { id: 'c', texto: '10%.', esCorrecta: false },
            { id: 'd', texto: '70%.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se recomienda limitar para evitar el sedentarismo en niños? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tiempo dedicado a la televisión y videojuegos. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El tiempo dedicado a la lectura. ',
              esCorrecta: false,
            },
            { id: 'c', texto: 'El tiempo de descanso. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Las actividades escolares. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Es cierto que realizar pausas activas en el trabajo debe incluir movilidad articular y estiramientos? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'd', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿La ingesta de sal debe ser superior a 10 gramos diarios para adultos, según las recomendaciones del documento? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Es importante integrar a los adultos mayores en las actividades físicas que realiza la familia? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
