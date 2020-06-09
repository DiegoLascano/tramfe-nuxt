8<template>
  <transition name="fade">
    <div v-show="show" class="z-0">
      <nuxt-link to="#" class="fixed right-0 bottom-0">
        <client-only>
          <inline-svg
            name="icon-cheveron-up-circle-new"
            classes="h-10 w-10 md:h-12 md:w-12 mr-6 mb-6 md:mr-12 md:mb-12"
          ></inline-svg>
        </client-only>
      </nuxt-link>
    </div>
  </transition>
</template>

<script>
import inViewport from "in-viewport";
export default {
  props: ["whenHidden"],
  data() {
    return {
      show: false
    };
  },
  created() {
    this.$eventBus.$on("menu-toggled", menu => {
      this.toggleShow(menu);
    });
  },
  mounted() {
    window.addEventListener("scroll", this.checkViewport, { passive: true });
  },
  methods: {
    checkViewport() {
      this.show = !inViewport(document.querySelector(this.whenHidden));
    },
    toggleShow(menu) {
      if (menu == true) {
        this.show = !menu;
        window.removeEventListener("scroll", this.checkViewport);
      } else {
        window.addEventListener("scroll", this.checkViewport, {
          passive: true
        });
        this.checkViewport();
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>