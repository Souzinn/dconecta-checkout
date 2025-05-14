<!-- components/checkout/CheckoutModal.vue -->
<template>
  <v-dialog
    :model-value="modelValue"
    @update:modelValue="(val) => $emit('update:modelValue', val)"
    max-width="900"
    persistent
  >
    <v-card>
      <v-card-actions class="justify-end">
        <v-btn color="grey" variant="text" @click="$emit('close')"
          >Fechar</v-btn
        >
      </v-card-actions>
      <v-container fluid class="pa-0 fill-height">
        <v-row no-gutters>
          <!-- Coluna Esquerda -->
          <v-col
            cols="12"
            md="6"
            class="d-flex flex-column pa-10 justify-space-between"
          >
            <CheckoutResume :plan="plan" :displayPrice="priceLabel" />
          </v-col>

          <!-- Coluna Direita -->

          <v-col cols="12" md="6" class="pa-10">
            <CheckoutPagamento :rawPrice="rawPrice" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  plan: Object,
  priceLabel: String,
  rawPrice: Number,
});
defineEmits(["update:modelValue", "close"]);
</script>
