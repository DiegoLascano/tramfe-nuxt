<template>
  <modal-component event-name="psic-clin">
    <modal-cover class="modal-cover-clinical">
        <p class="whitespace-no-wrap">Psicología</p>
        <p class="whitespace-no-wrap">Clínica</p>
    </modal-cover>
    <modal-simple>
        <template v-slot:title>
            Concepto
        </template>
        <template v-slot:body>
            Es la encargada de la investigación de todos los factores, evaluación, diagnóstico, tratamiento 
            y prevención que afecten a la salud mental y a la conducta adaptativa, que puedan generar malestar 
            y sufrimiento en el individuo humano.
        </template>
        </modal-simple>
    </modal-simple>
    <modal-simple>
        <template v-slot:title>
            Psicología clínica de adultos y niños
        </template>
        <template v-slot:body>
            Dentro de esta rama se utiliza la psicoterapia para detectar y tratar de manera adecuada las patologías 
            de los adultos. Esto se logra mediante diferentes métodos psicoterapéuticos para de esta manera incentivar 
            el crecimiento del individuo.
        </template>
        </modal-simple>
    </modal-simple>
  </modal-component>
</template>