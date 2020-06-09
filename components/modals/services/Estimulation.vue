<template>
  <modal-component event-name="est-cog">
    <modal-cover class="modal-cover-cognitive">
        <p class="whitespace-no-wrap">Estimulación</p>
        <p class="whitespace-no-wrap">Cognitiva</p>
    </modal-cover>
    <modal-simple>
        <template v-slot:title>
            Concepto
        </template>
        <template v-slot:body>
            Es un conjunto de técnicas y estrategias enfocadas en mejorar la eficacia de capacidades cognitivas 
            y funciones ejecutivas como la memoria, atención, lenguaje, razonamiento o la planificación, entre otras.
        </template>
        </modal-simple>
    </modal-simple>
    <modal-simple>
        <template v-slot:title>
            Tratamiento
        </template>
        <template v-slot:body>
            Existen varias opciones de actividades para entrenar nuestro cerebro que abarcan desde los clásicos cuadernos 
            de ejercicios hasta las formas mas novedosas como los juegos de entrenamiento cerebral, la estimulación eléctrica 
            transcraneal y la tele rehabilitación.
        </template>
        </modal-simple>
    </modal-simple>
  </modal-component>
</template>