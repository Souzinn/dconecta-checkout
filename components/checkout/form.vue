<template>
  <div>
    <v-text-field
      v-model="form.email"
      label="Email"
      type="email"
      variant="outlined"
      class="mb-3"
      :rules="[rules.required, rules.email]"
    />
    <v-text-field
      v-model="form.cardNumber"
      label="Número do cartão"
      placeholder="1234 1234 1234 1234"
      variant="outlined"
      class="mb-3"
      v-mask="'#### #### #### ####'"
      :rules="[rules.required, rules.cardNumber]"
    />
    <v-row dense class="mb-3">
      <v-col>
        <v-text-field
          v-model="form.expiry"
          label="MM / AA"
          placeholder="08 / 26"
          variant="outlined"
          v-mask="'## / ##'"
          :rules="[rules.required]"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="form.cvc"
          label="CVC"
          placeholder="123"
          variant="outlined"
          v-mask="'###'"
          :rules="[rules.required]"
        />
      </v-col>
    </v-row>
    <v-text-field
      v-model="form.name"
      label="Nome no cartão"
      variant="outlined"
      class="mb-3"
      :rules="[rules.required]"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = defineModel();

const rules = {
  required: (v) => !!v || "Campo obrigatório",
  email: (v) => /.+@.+\..+/.test(v) || "Email inválido",
  cardNumber: (v) => v.replace(/\s/g, "").length === 16 || "Número inválido",
};
</script>
