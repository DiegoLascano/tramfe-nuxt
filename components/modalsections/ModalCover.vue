<template>
  <section class="bg-cover bg-center h-auto">
    <div class="layer w-full h-full py-32">
      <div class="container-800 mx-auto w-4/5 md:w-full">
        <p
          class="text-2xl md:text-4xl text-center md:max-w-lg lg:max-w-xl mx-auto text-cyan-050"
        >
          <slot></slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.modal-cover-profile {
  background-image: url("../../assets/images/photos/modal/valeria_consultorio.jpg");
}
.modal-cover-clinical {
  background-image: url("../../assets/images/photos/modal/clinical.png");
}
.modal-cover-neuro {
  background-image: url("../../assets/images/photos/modal/neuro.jpg");
}
.modal-cover-cognitive {
  background-image: url("../../assets/images/photos/modal/cognitive.jpg");
}
.modal-cover-edu {
  background-image: url("../../assets/images/photos/modal/edu.jpg");
}
.modal-cover-tele {
  background-image: url("../../assets/images/photos/modal/tele.jpg");
}
.modal-cover-training {
  background-image: url("../../assets/images/photos/modal/capacitacion.jpg");
}
</style>