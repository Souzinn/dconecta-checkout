<template>
  <div>
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
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

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
</script>

<style scoped>
.badge-success {
  background: #43a047;
  color: #fff;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.75em;
}
</style>
