<template>
  <v-card class="my-12 pa-4 rounded-xl shadow-lg">
    <v-card-title class="text-h5 font-weight-bold text-center">
      Perguntas Frequentes
    </v-card-title>

    <div class="text-center mb-4">
      <v-btn variant="outlined" color="primary" class="ma-2" @click="all">
        Abrir tudo
      </v-btn>
      <v-btn variant="outlined" color="secondary" class="ma-2" @click="none">
        Fechar tudo
      </v-btn>
    </div>

    <v-expansion-panels v-model="panel" multiple elevation="1">
      <v-expansion-panel
        v-for="item in faq"
        :key="item.value"
        :value="item.value"
      >
        <v-expansion-panel-title class="font-weight-medium pa-6">
          {{ item.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ item.text }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const panel = ref([]);

const faq = [
  {
    value: "foo",
    title: "Quais informações a Conecta Suite terá acesso?",
    text: "Estamos comprometidos com a sua privacidade. A Conecta Suite utiliza as informações que você nos fornece para entrar em contato sobre nosso conteúdo relevante, produtos e serviços. Você pode cancelar a inscrição dessas comunicações a qualquer momento. Para mais informações, consulte nossa política de privacidade e nossos termos de uso.",
  },
  {
    value: "bar",
    title: "Terei ajuda durante a configuração e uso da plataforma?",
    text: "Sim, a nossa equipe de suporte vai te ajudar desde o início a configurar tudo o que for necessário, e continua disponível para auxiliar em dúvidas ou qualquer necessidade encontrada no dia a dia.",
  },
  {
    value: "baz",
    title: "O que acontece se eu decidir desativar minha conta?",
    text: "A desinstalação é feita de forma simples, descomplicada e autônoma, assim que é solicitada essa ação. E ao desativar, as suas personalizações permanecem ativas, indicamos apenas a mudança de senha dos usuários.",
  },
  {
    value: "bas",
    title: "Quem terá acesso às funcionalidades da Conecta Suite?",
    text: "No primeiro login, o administrador do painel do Google Workspace ou Microsoft 365 tem o acesso, mas com a Conecta Suite é possível definir regras de autonomia para que outros colaboradores definidos pelo Administrador também possam acessar. Essa é uma forma de descentralizar funções básicas que podem ser feitas por outras pessoas.",
  },
  {
    value: "bax",
    title: "A Conecta Suite é um sistema de ponto?",
    text: "Não, somos uma ferramenta que otimiza sua gestão de usuários do Google Workspace e Microsoft 365, e que pode ser integrada ao seu sistema de ponto para aumentar a segurança da informação da sua empresa.",
  },
  {
    value: "bac",
    title:
      "O uso da Conecta Suite está de acordo com as boas práticas da LGPD?",
    text: "Sim, estamos de acordo com as boas práticas da LGPD e não temos acesso a dados sensíveis.",
  },
  {
    value: "bav",
    title: "A Conecta Suite precisa ser instalada em todas as máquinas?",
    text: "Sim, estamos de acordo com as boas práticas da LGPD e não temos acesso a dados sensíveis.",
  },
];

function all() {
  panel.value = faq.map((f) => f.value);
}
function none() {
  panel.value = [];
}
</script>
