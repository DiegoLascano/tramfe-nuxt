<template>
  <div>
    <div class="section-title text-cool-grey-050 pt-24">
      Plataforma GNPT
    </div>
    <div class="text-cool-grey-600 container-800 mx-auto w-4/5 md:w-full">
      <div class="flex flex-col md:flex-row items-center py-5">
        <div class="md:w-1/3">
          <div class="logo-guttmann bg-cover bg-center h-24 w-32 m-auto"></div>
        </div>
        <div class="text-cool-grey-600 md:w-2/3 mt-5 md:mt-0">
          Guttmann, NeuroPersonalTrainer&copy; Es una plataforma web (online)
          que permite diseñar la terapia de ejercicios que ayudan a la
          estimulación y rehabilitación cognitiva de los pacientes bajo la
          supervisión del profesional clínico.
        </div>
      </div>
      <div class="pb-5">
        <p>
          Esta herramienta permite la monitorización y seguimiento del paciente,
          en la realización de las actividades de tratamiento (Atención,
          memoria, funciones ejecutivas, cognición social, lenguaje, etc).
          Además, el profesional puede evaluar los resultados e informes de
          forma instántanea y remota.
        </p>
        <p>
          La plataforma GNPT está acreditada como Producto Sanitario de Clase I
          por la Agencia Española de Medicamentos y Productos Sanitarios, que
          además incorpora un método de intervención clínica patentado a nivel
          internacional (PCT/ES2008/00677).
        </p>
      </div>
      <div class="font-bold py-5">
        Soy un paciente, ¿Cómo funciona?
      </div>
      <carousel
        :per-page="1"
        :speed="500"
        :paginationColor="'#9AA5B1'"
        :paginationActiveColor="'#14919B'"
      >
        <slide>
          <stepcard-component image="step-1" icon-name="icon-doctor">
            <template v-slot:step-card-title
              >Exploración Neuropsicológica</template
            >
            <template v-slot:step-card-body>
              El primer lugar, se debe determinar el perfil cognitivo de
              afectación inicial, para lo cual, un profesional te realizará una
              <span class="text-cyan-600 font-semibold"
                >exploración neuropsicológica</span
              >
              y luego diseñará tu tratamiento personalizado acorde a tu
              condición.
            </template>
          </stepcard-component>
        </slide>
        <slide>
          <stepcard-component image="step-2" icon-name="icon-house">
            <template v-slot:step-card-title
              >Tratamiento Personalizado</template
            >
            <template v-slot:step-card-body>
              Después, podrás realizar tu tratamiento personalizado en un
              <span class="text-cyan-600 font-semibold"
                >centro de rehabilitación o en tu propio hogar</span
              >
              con total
              <span class="text-cyan-600 font-semibold"
                >flexibilidad de acceso y horarios</span
              >. Se debe acceder a la plataforma mediante un computador o
              tablet.
            </template>
          </stepcard-component>
        </slide>
        <slide>
          <stepcard-component image="step-3" icon-name="icon-presentation-6">
            <template v-slot:step-card-title>Evaluación de Resultados</template>
            <template v-slot:step-card-body>
              Una vez realizadas las actividades terapéuticas, el profesional
              revisará los
              <span class="text-cyan-600 font-semibold"
                >resultados clínicos e informes neuropsicológicos</span
              >
              para evaluar el estado del tratamiento. Así, aportará con
              recomendaciones para
              <span class="text-cyan-600 font-semibold"
                >mejorar tu estado cognitivo</span
              >.
            </template>
          </stepcard-component>
        </slide>
      </carousel>
      <div class="font-semibold mt-6 text-center">
        ¿Ya eres paciente registrado?
        <p>Accede a la plataforma mediante el siguiente enlace:</p>
      </div>
      <a href="https://gnpt.es/mobile/" target="_blank" class="flex py-4">
        <client-only>
          <inline-svg
            name="icon-external-window"
            classes="m-auto h-8 w-8"
            class="icon-link m-auto flex rounded-full w-16 h-16"
          ></inline-svg>
        </client-only>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-guttmann {
  background-image: url("../../assets/images/logos/guttmann.png");
}
.icon-link {
  @apply bg-cool-grey-050;
  transition: background-color 0.5s ease;
}
.icon-link:hover {
  @apply bg-cool-grey-050;
}
@screen md {
  .icon-link {
    @apply bg-cool-grey-200;
  }
}
</style>