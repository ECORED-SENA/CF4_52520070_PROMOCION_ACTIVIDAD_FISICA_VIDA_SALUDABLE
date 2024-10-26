<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="900") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up" data-aos-duration="1000")
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta la relación entre hábitos y vida saludable, destacando los hábitos saludables como comportamientos asumidos en el estilo de vida y el uso de herramientas de promoción de la salud. Se incluye la promoción de un estilo de vida adecuado, que abarca actividades recomendadas como recreovía y ciclovía, junto con estrategias y recomendaciones nutricionales. Por otro lado, se resalta la importancia de una vida saludable manteniéndose físicamente activo, realizando ejercicio, participando en actividades recreativas, teniendo una alimentación adecuada y previniendo el sobrepeso y la obesidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
