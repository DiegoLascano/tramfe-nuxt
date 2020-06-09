<template>
  <modal-component event-name="rehab">
    <modal-cover class="modal-cover-neuro">
        <p class="whitespace-no-wrap">Rehabilitación</p>
        <p class="whitespace-no-wrap">Neuropsicológica</p>
    </modal-cover>
    <modal-simple>
        <template v-slot:title>
            Concepto
        </template>
        <template v-slot:body>
            Es un tipo de tratamiento recomendado para aquellos pacientes que han sufrido daño en las estructuras del 
            sistema nervioso central, especialmente el cerebro. Es un topo de programa que puede ampliarse involucrando 
            a la familia, para que así sigan el tratamiento en casa y no solo en consultorio.
        </template>
        </modal-simple>
    </modal-simple>
    <modal-simple>
        <template v-slot:title>
            Tratamiento
        </template>
        <template v-slot:body>
            Las tareas neuropsicológicas que son planteadas a las personas deben estar enfocadas en su estilo de vida, 
            las necesidades y capacidades actuales que la persona requiera en el tratamiento.
        </template>
        </modal-simple>
    </modal-simple>
  </modal-component>
</template>