<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h3 class="text-subtitle-1 font-weight-medium">Adicionais</h3>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-checkbox
            v-for="add in adicionais"
            :key="add.id"
            v-model="add.selected"
            :label="`${add.name} (+${add.priceLabel})`"
            class="mb-2"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
const emit = defineEmits(["totalPrice"]);
const props = defineProps({
  displayPrice: {
    type: String,
    default: "",
  },
});
const adicionais = reactive([
  {
    id: 1,
    name: "Suporte Premium",
    price: 10,
    priceLabel: "$10.00",
    selected: false,
  },
  {
    id: 2,
    name: "Relatórios Avançados",
    price: 5,
    priceLabel: "$5.00",
    selected: false,
  },
]);

const basePrice = computed(() => {
  const match = props.displayPrice.match(/[\d,.]+/);
  return match ? parseFloat(match[0].replace(",", ".")) : 0;
});

const totalPrice = computed(() => {
  return (
    basePrice.value +
    adicionais.filter((a) => a.selected).reduce((sum, a) => sum + a.price, 0)
  );
});

watch(totalPrice, (v) => {
  emit("totalPrice", v);
});
</script>
