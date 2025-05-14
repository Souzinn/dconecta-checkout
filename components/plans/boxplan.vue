<template>
  <div class="d-flex flex-wrap justify-center ga-4 py-10">
    <v-card
      v-for="(itens, index) in plans"
      :key="index"
      class="pa-6 text-center elevation-3 d-flex flex-column justify-space-between position-relative"
      :class="{ 'bg-grey-lighten-5': itens.popular }"
      max-width="282"
      min-height="480"
      rounded="xl"
    >
      <v-chip
        v-if="itens.id === 4"
        color="deep-purple-accent-4"
        text-color="white"
        class="position-absolute"
        style="top: -12px; left: 50%; transform: translateX(-50%); z-index: -1"
        label
        size="small"
      >
        Mais popular
      </v-chip>
      <v-card-text class="flex-grow-1 d-flex flex-column">
        <div class="text-subtitle-1 font-weight-medium text-primary">
          {{ itens.name }}
        </div>

        <div class="text-h5 font-weight-bold my-2">
          <span v-if="isAnnual">{{ itens.annualPrice }}</span>
          <span v-else>{{ itens.price }}</span>
        </div>

        <p class="text-body-2 mb-4">{{ itens.description }}</p>

        <v-divider class="my-4"></v-divider>

        <!-- Espaço reservado para benefícios -->
        <div class="flex-grow-1">
          <ul class="text-start text-body-2 px-4">
            <li
              v-for="(beneficio, i) in itens.benefits"
              :key="i"
              class="mb-2 d-flex align-center"
            >
              <v-icon size="18" class="mr-2" color="success">
                mdi-check-circle-outline
              </v-icon>
              {{ beneficio }}
            </li>
          </ul>
        </div>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
          color="primary"
          variant="flat"
          class="text-none rounded-pill px-6"
          @click="goToCheckout(itens.id)"
        >
          Escolher plano
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    isAnnual: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      plans: [
        {
          id: 4,
          name: "Enterprise",
          price: "R$ 144,38/mês",
          annualPrice: "R$ 1.732,56/ano",
          description: "Soluções corporativas completas e integradas",
          benefits: [
            "Customização total",
            "Gerente de conta dedicado",
            "SLA empresarial",
          ],
        },
        {
          id: 3,
          name: "Security",
          price: "R$ 116,88/mês",
          annualPrice: "R$ 1.402,56/ano",
          description: "Para empresas que precisam de segurança e controle",
          popular: true,
          benefits: [
            "Acesso completo",
            "Monitoramento avançado",
            "Suporte 24/7",
          ],
        },
        {
          id: 2,
          name: "Standard",
          price: "R$ 37,38/mês",
          annualPrice: "R$ 448,56/ano",
          description: "Para equipes em crescimento",
          benefits: ["Acesso completo", "Suporte prioritário"],
        },
        {
          id: 1,
          name: "Basic",
          price: "Gratuito",
          annualPrice: "Gratuito",
          description: "Para quem precisa do essencial",
          benefits: ["Acesso limitado", "Suporte básico"],
        },
      ],
    };
  },
  methods: {
    goToCheckout(planId) {
      this.$router.push({
        path: "/plans/checkout",
        query: { plan: planId, isAnnual: this.isAnnual },
      });
    },
  },
};
</script>
