<template>
    <section class="modal-section" :data-color="dataColor">
        <div class="section-title">
            <slot name="title"></slot>
        </div>
        <div class="text-xl text-cool-grey-600 w-5/6 md:w-2/3 py-8 my-8 mx-auto">
            <slot name="body"></slot>
        </div>
    </section>
</template>

<script>
export default {
    props:['dataColor'],
}
</script>
