<template>
  <div>
    <div class="section-title">Servicios</div>
    <div class="flex flex-col sm:flex-row flex-wrap -mx-3">
      <service-card
        v-for="service in services"
        v-bind:key="service.id"
        :icon-name="service.icon"
        :event-name="service.eventName"
      >
        {{ service.name }}
      </service-card>
    </div>
  </div>
</template>

<script>
// import ServiceCard from "../components/ServiceCard";

export default {
  //   components: { ServiceCard },

  data() {
    return {
      services: [
        {
          id: 0,
          name: "Psicología Clínica",
          icon: "icon-psicologia",
          eventName: "psic-clin"
        },
        {
          id: 1,
          name: "Rehabilitación Neuropsicológica",
          icon: "icon-brain",
          eventName: "rehab"
        },
        {
          id: 2,
          name: "Estimulación Cognitiva",
          icon: "icon-brain-storm",
          eventName: "est-cog"
        },
        {
          id: 3,
          name: "Psicoeducación",
          icon: "icon-edu",
          eventName: "psic-edu"
        },
        {
          id: 4,
          name: "Telerehabilitacion",
          icon: "icon-remote",
          eventName: "tele-rehab"
        },
        {
          id: 5,
          name: "Capacitación",
          icon: "icon-certificate",
          eventName: "cap"
        }
      ]
    };
  }
};
</script>