<template>
    <section class="modal-section container-1200 w-full mx-auto" :data-color="dataColor">
        <div class="section-title text-cool-grey-050">
            <slot name="title"></slot>
        </div>
        <div class="flex flex-col w-5/6 mx-auto">
          <div class="md:w-1/2 text-cool-grey-600 text-center text-lg my-10 md:self-start max-w-lg">
            <slot name="column1"></slot>
          </div>
          <div class="md:w-1/2 text-cool-grey-600 text-center text-lg my-10 p-2 md:self-end max-w-lg">
            <slot name="column2"></slot>
          </div>
          <div class="md:w-1/2 text-cool-grey-600 text-center text-lg my-10 md:self-start max-w-lg">
            <slot name="column3"></slot>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['dataColor'],
}
</script>