<template>
  <div
    class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 text-cool-grey-700 hover:text-cyan-700 md:my-3 lg:my-4"
  >
    <a
      id="bg-card"
      @click="emitEvent()"
      class="m-3 flex flex-col rounded-lg h-56 width-xxs bg-cool-grey-100 hover:bg-cool-grey-200 mx-auto py-12"
    >
      <div class="flex-1 flex">
        <!-- <div class="flex m-auto h-20 w-20 rounded-full bg-cool-grey-200"> -->
        <client-only>
          <inline-svg
            :name="iconName"
            classes="primary-gradient h-12 w-12"
            class="m-auto"
          ></inline-svg>
        </client-only>
        <!-- </div> -->
      </div>
      <div class="flex-1 flex font-thin">
        <label class="m-auto text-lg">
          <slot></slot>
        </label>
      </div>
    </a>
  </div>
</template>

<script>
// import InlineSvg from "./InlineSvg.js";
export default {
  // components: {
  //   InlineSvg
  // },
  props: ["iconName", "eventName"],
  methods: {
    emitEvent() {
      this.$eventBus.$emit(this.eventName, "service event");
    }
  }
};
</script>

<style>
@screen sm {
  .width-xxs {
    max-width: 17rem;
  }
}
#bg-card {
  transition: background-color 0.5s ease;
}
</style>