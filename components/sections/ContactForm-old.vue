<template>
  <div>
    <form @submit.prevent="submit">
      <div class="flex flex-col">
        <div class="flex-1">
          <div class="section-title">Contacto</div>
          <p class="text-cool-grey-600 text-lg mb-10">
            En caso de que necesites entrar en contacto por algún motivo en
            particular, o simplemente si necesitas información más precisa,
            llena el siguiente formulario y me comunicaré contigo:
          </p>
        </div>
        <div class="flex-1 flex flex-col -mx-2">
          <div class="flex flex-col md:flex-row">
            <div class="flex-1 flex flex-col">
              <input
                type="text"
                @change="clearErrors($event)"
                v-model="form.firstName"
                :class="errors.firstName ? 'border border-red-600' : 'border-0'"
                class="form-input"
                name="firstName"
                id="form-firstname"
                placeholder="Nombre"
              />
              <span
                class="block text-xs italic text-red-500 ml-2"
                v-if="errors.firstName"
                v-text="errors.firstName[0]"
              ></span>
            </div>
            <div class="flex-1 flex flex-col">
              <input
                type="text"
                @change="clearErrors($event)"
                v-model="form.lastName"
                :class="errors.lastName ? 'border border-red-600' : 'border-0'"
                class="form-input"
                name="lastName"
                id="form-lastname"
                placeholder="Apellido"
              />
              <span
                class="block text-xs italic text-red-500 ml-2"
                v-if="errors.lastName"
                v-text="errors.lastName[0]"
              ></span>
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="flex-1 flex flex-col">
              <input
                type="email"
                @change="clearErrors($event)"
                v-model="form.email"
                class="form-input"
                :class="errors.email ? 'border border-red-600' : 'border-0'"
                name="email"
                id="form-email"
                placeholder="E-mail"
              />
              <span
                class="block text-xs italic text-red-500 ml-2"
                v-if="errors.email"
                v-text="errors.email[0]"
              ></span>
            </div>
            <div class="flex-1 flex flex-col">
              <input
                type="tel"
                @change="clearErrors($event)"
                v-model="form.phone"
                class="form-input"
                :class="errors.phone ? 'border border-red-500' : 'border-0'"
                name="phone"
                id="form-tel"
                placeholder="Teléfono"
              />
              <span
                class="block text-xs italic text-red-500 ml-2"
                v-if="errors.phone"
                v-text="errors.phone[0]"
              ></span>
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <textarea
              name="message"
              @change="clearErrors($event)"
              v-model="form.message"
              class="form-input"
              :class="errors.message ? 'border border-red-600' : 'border-0'"
              id="form-message"
              rows="6"
              placeholder="Mensaje"
            >
            </textarea>
            <span
              class="block text-xs italic text-red-500 ml-2"
              v-if="errors.message"
              v-text="errors.message[0]"
            ></span>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="btn btn-primary w-full md:w-32 text-cyan-050 tracking-wider"
            >
              Enviar
            </button>
          </div>
        </div>
        <div class="flex-1 flex flex-col sm:flex-row justify-around mb-8">
          <div class="my-4 sm:my-8 text-center">
            <div class="flex">
              <a class="mx-auto" href="tel:+593987120499">
                <client-only
                  ><inline-svg
                    name="icon-whatsapp"
                    classes="h-8 w-8"
                    class="my-4"
                  ></inline-svg
                ></client-only>
              </a>
            </div>
            <a
              href="tel:+593987120499"
              class="m-auto text-cool-grey-600 tracking-wide text-center"
            >
              +(593) 987 120 499
            </a>
          </div>
          <div class="my-4 sm:my-8 text-center">
            <div class="flex">
              <a class="mx-auto" href="mailto:vmvalladaresvelin@gmail.com">
                <client-only
                  ><inline-svg
                    name="icon-mail"
                    classes="primary h-8 w-8"
                    class="my-4"
                  ></inline-svg
                ></client-only>
              </a>
            </div>
            <a
              href="mailto:vmvalladaresvelin@gmail.com"
              class="m-auto text-cool-grey-600 tracking-wide text-center"
            >
              vmvalladaresvelin@gmail.com
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
      },
      errors: {},
      notification: {
        title: "",
        message: ""
      }
    };
  },
  mounted() {
    console.log(this.errors);
  },
  methods: {
    submit() {
      axios
        .post("/comments", this.form)
        .then(response => {
          this.notify(response.data),
            (this.form.firstName = ""),
            (this.form.lastName = ""),
            (this.form.phone = ""),
            (this.form.email = ""),
            (this.form.message = ""),
            (this.errors = "");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    notify(data) {
      this.notification.title = data.title;
      this.notification.message = data.message;
      this.emitEvent(this.notification);
    },
    emitEvent(data) {
      this.$eventBus.$emit("notification-message", data);
    },
    clearErrors(event) {
      this.errors[event.target.name].shift();
    }
  }
};
</script>

<style scoped>
.form-input {
  @apply bg-cool-grey-100 font-thin flex-1 text-lg rounded-lg py-4 px-6 m-2;
}
.form-input:hover {
  @apply bg-cool-grey-200 text-cyan-700;
}
::placeholder {
  color: #857f72;
  opacity: 1;
}
.form-input:hover::placeholder,
.form-input:focus::placeholder {
  color: #0e7c86;
  opacity: 1;
}
</style>