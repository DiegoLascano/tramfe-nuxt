<template>
  <div>
    <button
      @click="emitEvent()"
      class="btn btn-primary w-full md:w-40 text-cyan-050 tracking-wider"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ["eventName"],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.eventName);
  },
  methods: {
    emitEvent() {
      this.$eventBus.$emit(this.eventName, "toggle");
    }
  }
};
</script>
