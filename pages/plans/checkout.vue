<template>
  <div>
    <p style="min-height: 90vh"></p>
    <CheckoutModal
      v-model="dialog"
      :plan="plan"
      :price-label="priceLabel"
      :raw-price="rawPrice"
      @close="closeDialog"
    />
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const dialog = ref(false);
const plan = ref(null);

const planId = ref(Number(route.query.plan));
const isAnnual = ref(route.query.isAnnual === "true");

//modal só abre caso passe o planoId na query e só exibe depois de chamar
onMounted(async () => {
  if (planId.value) {
    await fetchPlan();
    dialog.value = true;
  }
});

watch(
  () => [route.query.plan, route.query.isAnnual],
  async ([newPlan, newIsAnnual]) => {
    planId.value = Number(newPlan);
    isAnnual.value = newIsAnnual === "true";
    if (planId.value) {
      dialog.value = true;
      await fetchPlan();
    }
  }
);

async function fetchPlan() {
  const res = await fetch(
    `https://dconecta-back.onrender.com/api/plan/${planId.value}?isAnnual=${isAnnual.value}`
  );
  plan.value = await res.json();
}

function closeDialog() {
  dialog.value = false;
  router.replace({ path: "/plans/pricing" });
}

const priceLabel = computed(() => plan.value?.price?.label ?? "");
const rawPrice = computed(() => plan.value?.price?.raw ?? 0);
</script>
