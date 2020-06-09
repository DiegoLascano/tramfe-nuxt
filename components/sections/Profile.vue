<template>
  <div>
    <div class="section-title text-cool-grey-050">
      Mi Perfil
    </div>
    <div class="flex flex-col md:flex-row w-full md:w-4/5 mx-auto">
      <div class="md:w-1/2 my-auto py-8">
        <div
          class="avatar bg-cover w-72 h-72 md:w-88 md:h-88 lg:w-112 lg:h-112 rounded-full mx-auto"
        ></div>
      </div>
      <div class="flex flex-col m-auto items-center md:w-1/2 py-4">
        <div
          class="text-gradient w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold py:6 md:py-4"
        >
          Valeria Valladares Velín
        </div>
        <ul class="list-disc list-inside text-xl py-4">
          <li class="my-2 text-xl text-cool-grey-700">Psicóloga Clínica</li>
          <li class="my-2 text-xl text-cool-grey-700">
            Experiencia en discapacidades
          </li>
          <li class="my-2 text-xl text-cool-grey-700">
            Rehabilitación neuropsicológica
          </li>
        </ul>
        <button-component
          event-name="profile"
          class="w-full md:w-40 my-2 md:text-xl"
          >Ver más</button-component
        >
      </div>
    </div>
  </div>
</template>

<script>
// import Button from "../components/Button";
export default {
  //   components: { Button }
};
</script>

<style scoped>
.avatar {
  background-image: url("../../assets/images/photos/profile.jpg");
}
</style>