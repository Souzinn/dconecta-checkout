<template>
  <div>
    <div v-if="plan">
      <!-- Test Mode -->
      <div class="d-flex align-center mb-4">
        <v-icon color="deep-purple-accent-4" class="mr-2"
          >mdi-check-circle</v-icon
        >
        <span class="text-caption font-weight-bold">TEST MODE</span>
      </div>

      <!-- Cabeçalho do plano -->
      <h2 class="text-h5 font-weight-bold mb-1">{{ plan.name }}</h2>
      <p class="text-body-2 mb-4">{{ plan.description }}</p>

      <!-- Seleção do período -->
      <v-card class="pa-4 mb-4 rounded-xl" elevation="1">
        <v-radio-group
          v-model="selectedPeriod"
          class="mt-2"
          row
          hide-details
          @change="onPeriodChange"
        >
          <v-radio label="Mensal" value="mensal" class="mr-4" />
          <v-radio value="anual">
            <template #label>
              <span class="font-weight-bold text-primary">
                Anual
                <span class="ml-1 badge badge-success">2 meses grátis!</span>
              </span>
            </template>
          </v-radio>
        </v-radio-group>
      </v-card>

      <!-- Adicionais -->
      <v-expansion-panels multiple class="mb-4">
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

      <!-- Total -->
      <div class="mb-6">
        <div class="d-flex justify-space-between">
          <span>Subtotal</span>
          <span class="text-body-1">{{ totalPriceLabel }}</span>
        </div>

        <!-- Total Final com Tooltip -->
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
    </div>

    <!-- Rodapé -->
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

<script setup lang="ts">
import { defineProps, reactive, computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
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

const route = useRoute();
const router = useRouter();

// Período selecionado: mensal ou anual, baseado na URL
const selectedPeriod = ref(
  route.query.isAnnual === "true" ? "anual" : "mensal"
);

// Atualiza a URL quando o usuário troca o período
function onPeriodChange() {
  router.replace({
    query: {
      ...route.query,
      isAnnual: selectedPeriod.value === "anual" ? "true" : "false",
    },
  });
}

// Se a URL mudar, atualiza o radio também
watch(
  () => route.query.isAnnual,
  (val) => {
    selectedPeriod.value = val === "true" ? "anual" : "mensal";
  }
);

// Exemplo de adicionais
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

// Ajuste do preço base: já vem do backend
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

const totalPriceLabel = computed(() => {
  return `$${totalPrice.value.toFixed(2)}`;
});
</script>

<style scoped>
.text-grey-darken-1 {
  color: #757575;
}
.badge-success {
  background: #43a047;
  color: #fff;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.75em;
}
.text-primary {
  color: #673ab7;
}
</style>
