<template>
  <div>
    <div v-if="plan">
      <CheckoutResumeHeader :plan="plan" />
      <CheckoutResumePeriodSelect class="pa-4 mb-4 rounded-xl" elevation="1" />
      <CheckoutResumeAddons
        :displayPrice="displayPrice"
        multiple
        class="mb-4"
        @totalPrice="handleTotalPrice"
      />
      <CheckoutResumeTotal :totalPriceLabel="totalPriceLabel" class="mb-6" />
    </div>

    <div class="text-caption text-center text-grey-darken-1">
      Powered by <strong>Conecta Suite</strong> |
      <a
        target="_blank"
        href="https://conectasuite.com/termos-de-uso/"
        class="text-decoration-none"
        >Termos</a
      >
      |
      <a
        target="_blank"
        href="https://conectasuite.com/politica-de-privacidade/"
        class="text-decoration-none"
        >Privacidade</a
      >
    </div>
  </div>
</template>

<script setup>
const total = ref(0);
const props = defineProps({
  plan: {
    type: Object,
    default: null,
  },
  displayPrice: {
    type: String,
    default: "",
  },
});

// Extrai o número do displayPrice e converter , por .
function parsePrice(priceStr) {
  const match = priceStr.match(/[\d,.]+/);
  if (!match) return 0;
  return parseFloat(match[0].replace(/\./g, "").replace(",", "."));
}

watch(
  () => props.displayPrice,
  (novoValor) => {
    total.value = parsePrice(novoValor);
  },
  { immediate: true }
);

function handleTotalPrice(v) {
  total.value = v;
}

const totalPriceLabel = computed(() => {
  return `$${total.value.toFixed(2)}`;
});
</script>
