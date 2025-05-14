<template>
  <v-form ref="formRef" @submit.prevent="handleSubmit">
    <h2 class="text-h5 mb-4">Método de Pagamento</h2>

    <v-radio-group v-model="paymentMethod" inline>
      <v-radio label="Cartão de crédito" value="card" />
      <v-radio label="PIX" value="pix" />
    </v-radio-group>

    <CheckoutForm v-if="paymentMethod === 'card'" v-model="cardData" />

    <div v-else class="text-center my-4">
      <v-img
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=chave_pix"
        max-width="200"
        class="mx-auto"
      />
      <p class="mt-2 text-caption">QR Code ilustrativo</p>
    </div>

    <v-btn color="primary" type="submit" block>Iniciar teste gratuito</v-btn>

    <v-dialog v-model="showModal" width="auto" persistent>
      <v-card class="pa-4 text-center">
        <v-card-title>Teste iniciado com sucesso!</v-card-title>
        <v-card-text>Redirecionando para a home...</v-card-text>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const paymentMethod = ref("card");
const cardData = ref({
  email: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
  name: "",
});

const formRef = ref(null);
const showModal = ref(false);
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

<style scoped>
.text-center {
  text-align: center;
}
</style>
