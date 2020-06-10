<template>
  <div class="cover lg:bg-fixed bg-cover bg-center h-96">
    <div class="layer w-full h-full flex">
      <div class="m-auto text-xl text-cyan-050 text-center w-full md:w-1/2">
        <client-only>
          <inline-svg
            name="icon-quote-rounded"
            classes="fill-current h-12 w-12 ml-6 mb-3"
            class="text-cyan-600"
          ></inline-svg>
        </client-only>
        <carousel
          :per-page="1"
          :autoplay="true"
          :loop="true"
          :autoplayTimeout="4000"
          :speed="1000"
          :paginationColor="'#9AA5B1'"
          :paginationActiveColor="'#14919B'"
        >
          <slide class="px-4">
            <p>Testimonial 1</p>
            Hola, mi nombre es Valeria Valladares. Fachlich arbeite ich
            überwiegend mit Patienten mit depressiven Symptomen,
            psychosomatischen Beschwerden, Burn-out oder Angststörungen.
          </slide>
          <slide class="px-4">
            <p>Testimonial 2</p>
            Magnis egestas nisl id pharetra praesent lacus, curabitur porta
            condimentum
          </slide>
          <slide class="px-4">
            Testimonial 3 Magnis egestas nisl id pharetra praesent lacus,
            curabitur porta condimentum
          </slide>
          <slide class="px-4">
            Testimonial 4 Magnis egestas nisl id pharetra praesent lacus,
            curabitur porta condimentum
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .testimonial{
        background-image: url('../../images/photos/cover/down.jpg')
    } */
</style>