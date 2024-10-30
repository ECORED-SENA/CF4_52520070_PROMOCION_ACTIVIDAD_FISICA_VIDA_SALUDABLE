<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro.pb-4
      p(data-aos="fade-up") Este componente formativo se enfoca en la promoción de la actividad física y los estilos de vida saludables, esenciales para mejorar la calidad de vida y prevenir enfermedades crónicas no transmisibles. La implementación de hábitos saludables, como el ejercicio regular y la adecuada alimentación, es fundamental para mantener un bienestar integral, tanto físico como mental.
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 A lo largo del componente, se exploran diversas estrategias para fomentar estos hábitos desde la infancia, con un enfoque en el rol clave que juega la familia en la adopción de un estilo de vida saludable. Asimismo, se subraya la importancia de la actividad física como un factor protector frente al sobrepeso, la obesidad y otras afecciones relacionadas con el sedentarismo.
      
      .row.mt-4
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/intro3.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 Además, se incluye información sobre recomendaciones nutricionales adaptadas a diferentes edades, desde lactantes hasta adultos mayores. Estas recomendaciones se complementan con políticas públicas y estrategias comunitarias, como la Ciclovía Recreativa, para promover el bienestar social y combatir el sedentarismo en la población.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
