<template>
  <div class="mb-6">
    <div class="d-flex justify-space-between">
      <span>Subtotal</span>
      <span class="text-body-1">{{ props.totalPriceLabel }}</span>
    </div>
    <div
      class="d-flex justify-space-between font-weight-bold align-center text-subtitle-1 mt-2"
    >
      <span>
        Total após o período de teste
        <v-tooltip text="Inclui impostos e taxas aplicáveis" location="top">
          <template #activator="{ props }">
            <v-icon
              v-bind="props"
              icon="mdi-information-outline"
              size="18"
              class="ms-1"
              color="grey"
            />
          </template>
        </v-tooltip>
      </span>
      <span class="text-h5">{{ totalPriceLabel }}</span>
    </div>

    <div class="d-flex justify-space-between mt-2">
      <span class="font-weight-medium">Total hoje</span>
      <span class="font-weight-medium text-success">R$ 0,00</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPriceLabel: {
    type: String,
    default: "",
  },
});
</script>
