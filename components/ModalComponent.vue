<template>
  <div>
    <transition name="fade">
      <div v-show="show" class="overlay z-20">
        <div class="modal sm:rounded-2xl">
          <button @click="toggleShow()" class="close text-cyan-050">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-close-circle h-12 w-12"
            >
              <circle cx="12" cy="12" r="10" class="primary-gradient" />
              <path
                class="secondary-gradient"
                d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"
              />
            </svg>
          </button>
          <div
            class="h-full overflow-auto flex flex-col sm:rounded-2xl"
            id="modal"
          >
            <!-- modal sections through components -->
            <slot></slot>

            <!-- footer -->
            <section class="modal-cover bg-cover bg-center">
              <div class="layer w-full h-full py-2"></div>
            </section>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["eventName"],
  data() {
    return {
      show: false
    };
  },
  created() {
    this.$eventBus.$on(this.eventName, data => {
      this.toggleShow();
    });
  },
  mounted() {
    // console.log(this.eventName);
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(203, 210, 217, 0.8);
  /* background-image: linear-gradient(118.91deg, #14919B -3.92%, rgba(84, 209, 219, 1) 66.37%);    */
}
.modal {
  @apply relative w-full h-full bg-cool-grey-050;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@screen sm {
  .modal {
    height: 93%;
    width: 90%;
  }
}
.modal-cover {
  background-image: url("../assets/images/photos/modal/alpes.jpg");
}
</style>