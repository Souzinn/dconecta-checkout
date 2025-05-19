<template>
  <v-form ref="formRef" @submit.prevent="handleSubmit">
    <h2 class="text-h5 mb-4">Método de Pagamento</h2>

    <v-radio-group v-model="paymentMethod" inline>
      <v-radio label="Cartão de crédito" value="card" />
      <v-radio label="PIX" value="pix" />
    </v-radio-group>

    <CheckoutForm v-if="paymentMethod === 'card'" v-model="cardData" />

    <CheckoutCardpix v-else />

    <v-btn color="primary" type="submit" block>Iniciar teste gratuito</v-btn>

    <CheckoutModalFinish v-model="showModal" width="auto" persistent />
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const formRef = ref(null);
const showModal = ref(false);
const paymentMethod = ref("card");
const cardData = ref({
  email: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
  name: "",
});
const router = useRouter();

const handleSubmit = async () => {
  const valid = await formRef.value?.validate();
  if (!valid) return;

  showModal.value = true;
  setTimeout(() => {
    showModal.value = false;
    router.push("/");
  }, 2000);
};
</script>
