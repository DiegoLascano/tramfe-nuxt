<template>
  <!-- in the main div, class overlay -->
  <div id="cover">
    <div class="absolute"></div>
    <div class="cover-bg-gradient min-h-screen flex flex-col justify-center">
      <div class="m-auto">
        <client-only>
          <inline-svg
            name="logo-valeria"
            classes="h-72 md:h-80 w-72 md:w-80 mx-auto"
            class="mx-auto"
          ></inline-svg>
        </client-only>
        <h1 class="text-center text-cyan-100 text-2xl pb-4 tracking-widest">
          <span class="text-3xl md:text-5xl text-cyan-050">V</span>aleria
          <span class="text-3xl md:text-5xl text-cyan-050">V</span>alladares
          <span class="text-3xl md:text-5xl text-cyan-050">V</span>elin
        </h1>
        <p class="text-center text-cyan-100 text-lg md:text-2xl tracking-wide">
          Especialista en Rehabilitación
        </p>
        <p class="text-center text-cyan-100 text-lg md:text-2xl tracking-wide">
          Neuropsicológica y Estimulación Cognitiva.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Images are working only whitin vue components. Somehow, url() doesnt work in scss files */
.cover-bg-gradient {
  background-image: linear-gradient(
    120deg,
    rgba(0, 62, 107, 1) 20%,
    rgba(10, 108, 116, 1) 50%,
    rgba(20, 145, 155, 1) 100%
  );
}
</style>