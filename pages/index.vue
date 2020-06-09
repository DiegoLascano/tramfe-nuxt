<template>
  <div>
    <svg class="absolute z-0">
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="200%" id="Gradient1">
          <stop offset="10%" class="gradient-10" />
          <stop offset="30%" class="gradient-30" />
          <stop offset="100%" class="gradient-100" />
        </linearGradient>
      </defs>
    </svg>
    <cover />
    <section id="concept" class="panel" data-color="grey-050">
      <concept />
    </section>
    <section id="profile" class="panel pt-1" data-color="gradient">
      <profile />
      <profile-modal />
    </section>
    <section
      id="services"
      class="panel flex-1 text-center"
      data-color="grey-050"
    >
      <div class="inline-block container-1200 w-4/5">
        <services />
        <services-index />
      </div>
    </section>
    <section
      id="platform-gnpt"
      class="panel min-h-screen"
      data-color="gradient"
    >
      <plataforma />
    </section>
    <testimonial />
    <section
      id="contact"
      class="panel container-800 w-4/5 mx-auto"
      data-color="grey-050"
    >
      <contact-form />
    </section>

    <visible-component when-hidden="#cover"></visible-component>

    <div class="footer">
      <foot />
    </div>
  </div>
</template>

<script>
export default {};
</script>
