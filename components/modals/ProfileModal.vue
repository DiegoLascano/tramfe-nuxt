<template>
  <modal-component event-name="profile">
    <modal-cover class="modal-cover-profile">
      Hola, mi nombre es Valeria Valladares. Fachlich arbeite ich überwiegend
      mit Patienten mit depressiven Symptomen, psychosomatischen Beschwerden,
      Burn-out oder Angststörungen.
    </modal-cover>

    <modal-simple data-color="grey-050">
      <template v-slot:title>
        Concepto
      </template>
      <template v-slot:body>
        Seit mehreren Jahren arbeite ich nicht nur psychotherapeutisch in
        eigener Praxis, mit Menschen, die momentan das Gefühl haben, aus eigener
        Kraft eine Krise nicht bewältigen zu können, sondern auch präventiv, um
        weiteren Krisen vorzubeugen. Dabei ist mir in meiner therapeutischen
        Arbeit ein integrativer Ansatz wichtig. Neben meiner
        verhaltenstherapeutischen Ausbildung, bin ich ausgebildete
        Schematherapeutin. Fachlich arbeite ich überwiegend mit Patienten mit
        depressiven Symptomen, psychosomatischen Beschwerden, Burn-out oder
        Angststörungen.
      </template>
    </modal-simple>

    <modal-columns data-color="gradient">
      <template v-slot:title>
        Experiencia
      </template>
      <template v-slot:column1>
        Seit mehreren Jahren arbeite ich nicht nur psychotherapeutisch in
        eigener Praxis, mit Menschen, die momentan das Gefühl haben, aus eigener
        Kraft eine Krise nicht bewältigen zu können, sondern auch präventiv, um
        weiteren Krisen vorzubeugen. Dabei ist mir in meiner therapeutischen
        Arbeit ein integrativer Ansatz wichtig. Neben meiner
        verhaltenstherapeutischen Ausbildung, bin ich ausgebildete
        Schematherapeutin. Fachlich arbeite ich überwiegend mit Patienten mit
        depressiven Symptomen, psychosomatischen Beschwerden, Burn-out oder
        Angststörungen.
      </template>
      <template v-slot:column2>
        Seit mehreren Jahren arbeite ich nicht nur psychotherapeutisch in
        eigener Praxis, mit Menschen, die momentan das Gefühl haben, aus eigener
        Kraft eine Krise nicht bewältigen zu können, sondern auch präventiv, um
        weiteren Krisen vorzubeugen. Dabei ist mir in meiner therapeutischen
        Arbeit ein integrativer Ansatz wichtig. Neben meiner
        verhaltenstherapeutischen Ausbildung, bin ich ausgebildete
        Schematherapeutin. Fachlich arbeite ich überwiegend mit Patienten mit
        depressiven Symptomen, psychosomatischen Beschwerden, Burn-out oder
        Angststörungen.
      </template>
      <template v-slot:column3>
        Seit mehreren Jahren arbeite ich nicht nur psychotherapeutisch in
        eigener Praxis, mit Menschen, die momentan das Gefühl haben, aus eigener
        Kraft eine Krise nicht bewältigen zu können, sondern auch präventiv, um
        weiteren Krisen vorzubeugen. Dabei ist mir in meiner therapeutischen
        Arbeit ein integrativer Ansatz wichtig. Neben meiner
        verhaltenstherapeutischen Ausbildung, bin ich ausgebildete
        Schematherapeutin. Fachlich arbeite ich überwiegend mit Patienten mit
        depressiven Symptomen, psychosomatischen Beschwerden, Burn-out oder
        Angststörungen.
      </template>
    </modal-columns>

    <section
      id="modal-contact"
      class="modal-section container-1200 w-full mx-auto"
      data-color="grey-050"
    >
      <div class="section-title  text-cool-grey-600">
        Contacto Personal
      </div>
      <div class="flex flex-col w-5/6 mx-auto">
        <p
          class="md:w-1/2 text-cool-grey-600 text-center text-2xl my-10 max-w-lg mx-auto"
        >
          Dejame saber en que te puedo ayudar, y me podré en contacto lo antes
          posible.
        </p>
        <div class="flex flex-col items-center py-8">
          <a
            href="mailto:vmvalladaresvelin@gmail.com"
            class="btn btn-primary rounded-full py-2 px-8 text-cyan-050 tracking-widest text-lg"
          >
            vmvalladaresvelin@gmail.com
          </a>
        </div>
        <div class="flex flex-col items-center py-8">
          <a
            href="tel:+593987120499"
            class="flex flex-col items-center text-cool-grey-600 text-lg tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-device-smartphone h-12 w-12 my-2"
            >
              <path
                class="primary-gradient"
                d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"
              />
              <path
                class="secondary-gradient"
                d="M12 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
              />
            </svg>
            (+593) 987 120 499
          </a>
        </div>
      </div>
    </section>
  </modal-component>
</template>