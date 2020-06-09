<template>
  <div class="w-full cover-bg-gradient h-64">
    <div class="flex w-full h-full">
      <div class="m-auto text-cyan-050 text-center">
        <div class="text-center py-4 flex justify-center">
          <!-- <div> -->
          Siguenos:
          <!-- </div> -->
          <a href="#" target="_blank">
            <client-only>
              <inline-svg
                name="icon-facebook"
                classes="h-6 w-6"
                class="icon inline-block px-3"
              ></inline-svg>
            </client-only>
          </a>
          <a href="https://twitter.com/tr_tramfe" target="_blank">
            <client-only>
              <inline-svg
                name="icon-twitter"
                classes="h-6 w-6"
                class="icon inline-block px-3"
              ></inline-svg>
            </client-only>
          </a>
        </div>
        <client-only>
          <inline-svg
            name="logo-valeria"
            classes="h-24 w-24 m-auto"
            class="block"
          ></inline-svg>
        </client-only>
        &copy; Valeria Valladares.
        <p>Todos los derechos reservados</p>
        <p>
          Made with &hearts; by
          <a
            href="mailto:diegolascanodalgo@gmail.com"
            class="underline hover:text-cyan-300"
          >
            Diego Lascano
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  fill: #e0fcff;
  transition: fill 0.3s ease;
}
.icon:hover {
  fill: #54d1db;
}
</style>