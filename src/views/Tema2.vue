<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Vida saludable
    
    .cont_2_1
      .row.mt-4
        .col(style="place-self:center;" data-aos="fade-right")
          p La práctica diaria de mantener un estilo de vida activo es esencial para prevenir #[strong enfermedades crónicas no transmisibles] y reducir el riesgo de muertes prematuras. Para lograr un estilo de vida activo, es importante que las personas se mantengan #[strong físicamente activas], realizando actividades de intensidad moderada que sumen al menos 30 minutos al día durante la mayor parte de la semana. En el caso de actividades físicas de alta intensidad, se recomienda un mínimo de 15 minutos diarios.
          p.mb-0 La actividad física regular, junto con una dieta adecuada, reduce riesgos de enfermedades como diabetes y problemas cardíacos, especialmente en personas con sobrepeso, mientras que evitar el sedentarismo es clave para maximizar estos beneficios.
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/1.png")
      
      .m-auto.mt-5
        .row.justify-content-center
          .col-md-10.col-xl.col-lg-6.mb-3(data-aos="zoom-in" data-aos-duration="700")
            .h-100(style="border-radius:13px;box-shadow:0px 4px 10px rgba(0,0,0,.1)")
              .row.h-100
                .col-auto.pe-0
                  .p-2.h-100.d-flex.align-content-center.align-items-center(style="background-color:#97D8F6;border-radius: 13px 0px 0px 13px")
                    figure
                      img(src="@/assets/curso/tema2/2.svg" style="max-width:60px;")
                .col.ps-0
                  .p-3.h-100(style="background-color:#D5EFFB;border-radius: 0px 13px 13px 0px")
                    p.fw-bold Tiempo de actividad
                    p.mb-0 Se considera que una persona es físicamente activa cuando cumple con los niveles recomendados de actividad física diaria.
          .col-md-10.col-xl.col-lg-6.mb-3(data-aos="zoom-in" data-aos-duration="750")
            .h-100(style="border-radius:13px;box-shadow:0px 4px 10px rgba(0,0,0,.1)")
              .row.h-100
                .col-auto.pe-0
                  .p-2.h-100.d-flex.align-content-center.align-items-center(style="background-color:#97D8F6;border-radius: 13px 0px 0px 13px")
                    figure
                      img(src="@/assets/curso/tema2/3.svg" style="max-width:60px;")
                .col.ps-0
                  .p-3.h-100(style="background-color:#D5EFFB;border-radius: 0px 13px 13px 0px")
                    p.fw-bold Evitar sedentarismo
                    p.mb-0 Es crucial evitar permanecer sentado por largos periodos, ya que esto podría anular los beneficios de la actividad física, incluso si se sigue un régimen de ejercicio.
          .col-md-10.col-xl.col-lg-6.mb-3(data-aos="zoom-in" data-aos-duration="800")
            .h-100(style="border-radius:13px;box-shadow:0px 4px 10px rgba(0,0,0,.1)")
              .row.h-100
                .col-auto.pe-0
                  .p-2.h-100.d-flex.align-content-center.align-items-center(style="background-color:#97D8F6;border-radius: 13px 0px 0px 13px")
                    figure
                      img(src="@/assets/curso/tema2/4.svg" style="max-width:60px;")
                .col.ps-0
                  .p-3.h-100(style="background-color:#D5EFFB;border-radius: 0px 13px 13px 0px")
                    p.fw-bold Beneficios adicionales
                    p.mb-0 Acompañar la actividad física con una dieta hipocalórica puede ser muy beneficioso, especialmente en personas con sobrepeso u obesidad.
          .col-md-10.col-xl.col-lg-6.mb-3(data-aos="zoom-in" data-aos-duration="850")
            .h-100(style="border-radius:13px;box-shadow:0px 4px 10px rgba(0,0,0,.1)")
              .row.h-100
                .col-auto.pe-0
                  .p-2.h-100.d-flex.align-content-center.align-items-center(style="background-color:#97D8F6;border-radius: 13px 0px 0px 13px")
                    figure
                      img(src="@/assets/curso/tema2/5.svg" style="max-width:60px;")
                .col.ps-0
                  .p-3.h-100(style="background-color:#D5EFFB;border-radius: 0px 13px 13px 0px")
                    p.fw-bold Reducción de riesgos
                    p.mb-0 Las personas obesas que logran mantenerse activas pueden reducir significativamente el riesgo de afecciones cardíacas y diabetes.
    
    p.mt-5(data-aos="fade-right") Este enfoque integral mejora el perfil de #[strong riesgo para la salud], ofreciendo una protección contra diversas #[strong enfermedades] y promoviendo una mejor calidad de vida.
    p(data-aos="fade-left") Para la promoción de estilos de vida saludables es importante tener presente:

    .row.mt-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/6.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Divulgación de la información")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Campañas comunitarias.
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Avisos y vallas en puntos estratégicos.
          .row.col-xl-11.m-auto(titulo="Programas individuales")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Enfocados al cambio de comportamiento. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Promoción de actividades físicas en el ámbito educativo. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Fomento de grupos de apoyo en la comunidad.
          .row.col-xl-11.m-auto(titulo="Impacto ambiental")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Organización territorial. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Mejoramiento de los lugares de realización de actividad física.
    
    p.mt-5(data-aos="fade-up") Los beneficios de la actividad física son:

    .cont_2_2.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pt-lg-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row.pt-lg-4.col-xl-11.m-auto(titulo="Sociales")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Sociales
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Integración grupal. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Generación de nuevas normas. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Integración de valores en las actividades. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Aprendizaje significativo.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/8.png')
          .row.pt-lg-4.col-xl-11.m-auto(titulo="Psicológicos")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Psicológicos
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Aumenta la autoestima. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Disminuye la depresión. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Permite llevar una vida más independiente. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Reduce el aislamiento social. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Aumenta el bienestar. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Reduce el estrés. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Mejora la autoimagen. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Mantiene motivadas a las personas.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/9.png')
          .row.pt-lg-4.col-xl-11.m-auto(titulo="Fisiológicos")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Fisiológicos
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Ayuda a controlar el peso corporal. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Mejora la movilidad articular. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Mejora el perfil lipídico. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Mejora la resistencia y la fuerza muscular. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Aumenta la densidad ósea. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#4A6B7A;")
                  span Mejora la resistencia a la insulina.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/10.png')
    
    p.mt-5(data-aos="fade-up") La promoción de un estilo de vida adecuado: 

    .row.mt-4
      .col-lg-5.d-none.d-lg-block.pe-lg-0(data-aos="fade-down")
        figure
          img(src="@/assets/curso/tema2/11.png")
      .col.ps-lg-0(data-aos="fade-up")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#EAF7FD;")
          ul.lista-ul.mb-0
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Realizar ejercicio físico de forma regular y aumentar la actividad física diaria.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Participar constantemente en actividades recreativas.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span  Mantener una alimentación adecuada y saludable.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Controlar las emociones y el estrés.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Evitar fumar cigarrillos, pipas o masticar tabaco.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Consumir bebidas alcohólicas de forma moderada.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Moderar el consumo de sólidos o líquidos que contengan cafeína.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Evitar el uso y abuso de drogas psicotrópicas.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Dormir entre 7 y 8 horas diarias.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Adoptar medidas de seguridad para prevenir accidentes.
            li.d-flex.mb-lg-1
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Mantener hábitos de higiene adecuados.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color:#4A6B7A;")
              span Brindar ayuda a personas menos favorecidas.
  
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Actividades recomendadas
    
    .cont_2_3.mt-5
      p(data-aos="fade-up") Entre las actividades recomendadas para fomentar la adherencia a programas de actividad física se encuentran:
      .col-xl-9.m-auto.mt-5
        .row
          .col-auto.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/12.png")
          .col(data-aos="fade-left")
            .p-2.mb-2(style="background-color:#FEE3E4;border-radius:20px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema2/13.svg")
                .col(style="place-self:center;")
                  p.mb-0 Recreovía.
            .p-2.mb-2(style="background-color:#FEE3E4;border-radius:20px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema2/14.svg")
                .col(style="place-self:center;")
                  p.mb-0 Ciclovía.
            .p-2.mb-2(style="background-color:#FEE3E4;border-radius:20px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema2/15.svg")
                .col(style="place-self:center;")
                  p.mb-0 Clases en gimnasios de tono, #[em workout], ciclismo bajo techo, rumba, step, aeróbicos, salsa, pilates, yoga, cardio box, entre otras.
            .p-2.mb-2(style="background-color:#FEE3E4;border-radius:20px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema2/16.svg")
                .col(style="place-self:center;")
                  p.mb-0 En el ambiente educativo, se fomenta la práctica deportiva para promover la actividad física durante y fuera del horario escolar.
            .p-2(style="background-color:#FEE3E4;border-radius:20px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema2/17.svg")
                .col(style="place-self:center;")
                  p.mb-0 En el ámbito laboral, se promueven pausas activas y gimnasia laboral.
    
    p.mt-5(data-aos="fade-up") Los cambios comportamentales responsables para un estilo saludable:

    .col-xl-9.m-auto.mt-5
      .row
        .col(data-aos="fade-up")
          .p-2.mb-2(style="background-color:#D5EFFB;border-radius:6px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/18.svg")
              .col(style="place-self:center;")
                p.mb-0 Realizar pausas activas en el trabajo de 3 a 5 minutos con ejercicios de movilidad articular, estiramientos y trabajo de fuerza en la zona abdominal, dorsal, lumbar, y en las extremidades, según la actividad desempeñada.
          .p-2.mb-2(style="background-color:#D5EFFB;border-radius:6px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/19.svg")
              .col(style="place-self:center;")
                p.mb-0 Hacer actividad física moderada a vigorosa durante al menos 30 minutos, tres veces por semana.
          .p-2.mb-2(style="background-color:#D5EFFB;border-radius:6px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/20.svg")
              .col(style="place-self:center;")
                p.mb-0 Ajustar la intensidad de los ejercicios según el nivel de condición física individual.
          .p-2.mb-2(style="background-color:#D5EFFB;border-radius:6px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/21.svg")
              .col(style="place-self:center;")
                p.mb-0 Dormir 8 horas diarias para un adecuado descanso.
          .p-2(style="background-color:#D5EFFB;border-radius:6px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/22.svg")
              .col(style="place-self:center;")
                p.mb-0 Complementar el estilo de vida saludable con una alimentación adecuada, un buen uso del tiempo libre, pautas de higiene y medidas de salud.
        .col-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/23.png")
    
    p.mt-5(data-aos="fade-up") Aspectos a tener en cuenta para una vida saludable:

    .row.mt-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/24.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Aspecto 1")
            p.mb-0 La práctica de actividad física influye significativamente en la composición corporal.
          .row.col-xl-11.m-auto(titulo="Aspecto 2")
            p.mb-0 La ingesta de alimentos saludables y la actividad física son conductas interactivas que pueden ser promovidas a través de políticas públicas para fomentar estilos de vida saludables.
    .row.mt-4
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Aspecto 3")
            p.mb-0 La inactividad física es un riesgo para la salud a nivel mundial, especialmente en personas de bajos recursos, tanto en países desarrollados como en desarrollo.
          .row.col-xl-11.m-auto(titulo="Aspecto 4")
            p.mb-0 La prevención de enfermedades no transmisibles debe incluir actividades que fomenten el contacto con la naturaleza, una alimentación adecuada, la respiración, el ejercicio y la higiene corporal, para mejorar la vitalidad y la salud en general.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema2/25.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Estrategias
    
    p(data-aos="fade-left") Existen muchas estrategias para promover estilos y condiciones de vida saludables, tanto a nivel nacional como internacional, especialmente entre la población joven. Algunas de estas estrategias incluyen:

    .row.justify-content-center.mt-5
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.cont_2_4
          figure
            img(src="@/assets/curso/tema2/26.png")
          .p-4.text-center
            p.mb-0 El desplazamiento activo al colegio, como caminar o ir en bicicleta, lo que incrementa los niveles de actividad física diaria en los jóvenes y mejora su salud cardiovascular. 
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.cont_2_4
          figure
            img(src="@/assets/curso/tema2/27.png")
          .p-4.text-center
            p.mb-0 El uso de tecnologías de la información y la comunicación (TIC), como aplicaciones móviles, tabletas y brazaletes electrónicos, para motivar a los adolescentes a adoptar comportamientos saludables de forma creativa y divertida.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.cont_2_4
          figure
            img(src="@/assets/curso/tema2/28.png")
          .p-4.text-center
            p.mb-0 Programas comunitarios como la Ciclovía Recreativa y Recreovía en Bogotá, que fomentan la actividad física y tienen un impacto positivo en la salud pública.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Recomendaciones nutricionales
    
    .row
      .col(style="place-self:center;" data-aos="fade-right")
        p La creciente prevalencia de sobrepeso y obesidad está ligada a una alimentación inadecuada y al sedentarismo. Para contrarrestar este problema, se deben promover mejores hábitos alimenticios desde edades tempranas, ya que una alimentación saludable incide en el crecimiento y desarrollo del individuo.
        p.mb-0 Según la #[strong OMS y la FAO], llevar una dieta equilibrada ayuda a prevenir la malnutrición y reduce el riesgo de enfermedades no transmisibles, como diabetes, enfermedades cardíacas, accidentes cerebrovasculares y cáncer.
        .p-4.mt-4(style="background-color:#D5EFFB;border-radius:18px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/29.svg")
            .col(style="place-self:center;")
              p.mb-0 La ingesta calórica debe estar en equilibrio con el gasto energético, y se recomienda que las grasas no superen el 30 % de la ingesta total para evitar el aumento de peso. Además, es necesario reducir el consumo de azúcares y sal para mejorar la salud cardiovascular. 
      .col-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/30.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Lactantes y niños pequeños
    
    p(data-aos="fade-left") Las recomendaciones para una alimentación saludable durante la lactancia y la primera infancia son similares a las de los adultos, con algunos puntos adicionales:

    .col-xl-8.m-auto.mt-5
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="fade-right")
          .h-100(style="background-color:#E2DACC;border-radius:19px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
            figure
              img(src="@/assets/curso/tema2/31.png")
            .p-4.text-center
              p.mb-0 Los lactantes deben ser alimentados exclusivamente con leche materna durante los primeros seis meses de vida. La lactancia materna debe continuar al menos hasta los dos años.
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="fade-left")
          .h-100(style="background-color:#F3F0EA;border-radius:19px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
            figure
              img(src="@/assets/curso/tema2/32.png")
            .p-4.text-center
              p.mb-0 A partir de los seis meses, deben introducirse alimentos complementarios que sean variados, adecuados y nutritivos, sin abandonar la lactancia materna. No debe añadirse sal ni azúcar a los alimentos.

    p.mt-5(data-aos="fade-up") En cuanto a la hidratación, es importante tener en cuenta la #[strong jarra del buen beber] que propone el consumo de 6 a 8 vasos de líquidos distribuidos de la siguiente manera:

    .cont_1_5.mt-5
      .row
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/21.png")
        .col-lg-9(data-aos="fade-up")
          SlyderF(columnas="col-lg-6 p-4")
            .tarjeta.bg-white.p-4.cont_1_6
              figure.mb-3
                img(src="@/assets/curso/tema2/33.svg")
              h5.mb-3 Nivel 1
              p.mb-0 Agua potable 
              p.fw-bold (6 - 8 vasos)
            .tarjeta.bg-white.p-4.cont_1_6
              figure.mb-3
                img(src="@/assets/curso/tema2/34.svg")
              h5.mb-3 Nivel 2
              p.mb-0 Leche semi y descremada, bebidas de soya sin azúcar añadida 
              p.fw-bold (0 - 2 vasos)
            .tarjeta.bg-white.p-4.cont_1_6
              figure.mb-3
                img(src="@/assets/curso/tema2/35.svg")
              h5.mb-3 Nivel 3
              p.mb-0 Bebidas no calóricas con endulzantes artificiales 
              p.fw-bold (0 - 2 vasos)
            .tarjeta.bg-white.p-4.cont_1_6
              figure.mb-3
                img(src="@/assets/curso/tema2/36.svg")
              h5.mb-3 Nivel 4
              p.mb-0 Jugos de fruta, leche entera, bebidas alcohólicas o deportivas
              p.fw-bold  (0 - 2 vasos)
              p.mb-0 Refrescos y aguas de sabor
              p.fw-bold (0 - 2 vasos)
              p.mb-0 Café y té sin azúcar
              p.fw-bold (0 - 2 vasos)
    
    .cont_2_5.pt-5.pb-4
      p.mt-4(data-aos="fade-up") Según la #[strong American Diabetes Association], se recomienda la distribución de las porciones en #[strong Mi plato saludable] de la siguiente manera:
      .col-xl-8.m-auto.mt-5.col-lg-10.p-relative
        .row.justify-content-center
          .col-lg-auto.col-md-7.col-11.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/37.png")
          .col-lg(data-aos="fade-left" style="place-self:center;")
            .p-4.mb-3(style="background-color:#FFF1F1;border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  span.h5(style="background-color:#97D8F6;border-radius:50%;padding:.8rem 1.1rem;") A
                .col(style="place-self:center;")
                  h5.mb-0 1/4 Almidón 
            .p-4.mb-3(style="background-color:#FFF1F1;border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  span.h5(style="background-color:#97D8F6;border-radius:50%;padding:.8rem 1.1rem;") B
                .col(style="place-self:center;")
                  h5.mb-0 1/4 Proteína
            .p-4(style="background-color:#FFF1F1;border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  span.h5(style="background-color:#97D8F6;border-radius:50%;padding:.8rem 1.1rem;") C
                .col(style="place-self:center;")
                  h5.mb-0 1/2 Vegetales
    
    p.mt-5(data-aos="fade-right") Algunas recomendaciones adicionales son:

    .col-xl-10.m-auto.mt-5
      .row.justify-content-center
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .h-100(style="background-color:#EAF7FD;border-radius:15px;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4(style="background-color:#97D8F6;border-radius:15px 15px 0px 0px;")
              figure
                img(src="@/assets/curso/tema2/38.svg" style="width:90px;height:90px;display:inline;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4
              p.w-100 Comer muchas frutas y verduras.
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .h-100(style="background-color:#EAF7FD;border-radius:15px;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4(style="background-color:#97D8F6;border-radius:15px 15px 0px 0px;")
              figure
                img(src="@/assets/curso/tema2/39.svg" style="width:90px;height:90px;display:inline;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4
              p.w-100 Elegir alimentos de grano entero.
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .h-100(style="background-color:#EAF7FD;border-radius:15px;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4(style="background-color:#97D8F6;border-radius:15px 15px 0px 0px;")
              figure
                img(src="@/assets/curso/tema2/40.svg" style="width:90px;height:90px;display:inline;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4
              p.w-100 Incluir frijoles (porotos, habichuelas) y las lentejas en las comidas.
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .h-100(style="background-color:#EAF7FD;border-radius:15px;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4(style="background-color:#97D8F6;border-radius:15px 15px 0px 0px;")
              figure
                img(src="@/assets/curso/tema2/41.svg" style="width:90px;height:90px;display:inline;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4
              p.w-100 Elegir carnes magras y quitar la piel del pollo y pavo.
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .h-100(style="background-color:#EAF7FD;border-radius:15px;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4(style="background-color:#97D8F6;border-radius:15px 15px 0px 0px;")
              figure
                img(src="@/assets/curso/tema2/42.svg" style="width:90px;height:90px;display:inline;")
            .d-flex.align-content-center.flex-wrap.text-center.p-4
              p.w-100 Usar aceites líquidos como aceite de canola o de oliva en lugar de grasas sólidas como manteca o margarina.
    
    p.mt-5(data-aos="fade-right") Para mejorar la dieta de las personas, la Organización Mundial de la Salud propone una serie de recomendaciones que permiten mejorar la alimentación saludable. Entre ellas se destacan las siguientes:

    .row.mt-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/43.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Reducción del consumo de sal")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Evitar poner sal en la mesa. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Reducir el consumo de aperitivos salados. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Optar por productos con menor contenido de sodio.
          .row.col-xl-11.m-auto(titulo="Reducción del consumo excesivo de azúcar")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Limitar el consumo de alimentos y bebidas con alto contenido de azúcar, como bebidas azucaradas, aperitivos y golosinas. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Sustituir aperitivos azucarados por frutas y verduras frescas.
          .row.col-xl-11.m-auto(titulo="Aumento del consumo de frutas, verduras y hortalizas")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Incluir verduras en todas las comidas. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Comer frutas frescas y verduras crudas como aperitivos. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Consumir frutas y verduras frescas de temporada. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4A6B7A;")
                span Incluir una selección variada de frutas y verduras en la dieta.


    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2  Promoción de la alimentación saludable
    
    .row
      .col(style="place-self:center;" data-aos="fade-right")
        p.mb-0 En la #[strong Segunda Conferencia Internacional sobre Nutrición] de 2014, los gobiernos reafirmaron su compromiso de transformar los sistemas alimentarios, lo que se convirtió en un objetivo central del #[strong Decenio de Acción sobre la Nutrición] de las Naciones Unidas (2016-2025). En un informe reciente de la #[strong OMS] de 2023, se sigue recomendando la implementación de #[strong impuestos a las bebidas azucaradas] como una medida eficaz para reducir su consumo y, con ello, combatir la #[strong obesidad], la #[strong diabetes tipo 2] y la #[strong caries dental].
      .col-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/44.png")
    
    p.mt-5(data-aos="fade-up") Los puntos destacados del informe:

    .cont_2_1.pb-5.mt-4.pt-4
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .cont_1_11.p-4.h-100.pt-xl-5.pb-xl-5
            figure.mb-4
              img(src="@/assets/curso/tema2/45.svg")
            h5.mb-4 Políticas fiscales
            p.mb-0 Estas deben centrarse en productos con alternativas más saludables, promoviendo un cambio hacia hábitos de consumo más responsables.
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .cont_1_11.p-4.h-100.pt-xl-5.pb-xl-5
            figure.mb-4
              img(src="@/assets/curso/tema2/46.svg")
            h5.mb-4 Medidas recomendadas
            p.mb-0 La OMS insta a seguir implementando estas acciones en el marco del #[strong Plan de acción mundial para la prevención y el control de las enfermedades no transmisibles 2023-2030.]
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .cont_1_11.p-4.h-100.pt-xl-5.pb-xl-5
            figure.mb-4
              img(src="@/assets/curso/tema2/47.svg")
            h5.mb-4 Nutrición materna e infantil
            p.mb-0 También se hace un llamado a alinearse con el #[strong Plan integral de acción sobre nutrición materna, del lactante y del niño pequeño], en respuesta a las recomendaciones recientes para frenar la #[strong obesidad infantil] y otras enfermedades relacionadas con la alimentación.
      
      .col-xl-8.col-lg-10.m-auto.mt-4.mt-lg-5
        .p-3(style="background-color:#FEE3E4;box-shadow:0px 4px 15px rgba(0,0,0,.15);border-radius:13px;" data-aos="fade-up" data-aos-duration="800")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/48.svg")
            .col(style="place-self:center;")
              p.mb-0 Estas estrategias buscan promover mejoras sostenibles en la salud pública a nivel global.





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
