<template>
  <v-card class="my-12 rounded-xl shadow-lg">
    <v-card-title class="text-h5 font-weight-bold px-6 py-4">
      Comparativo de Benefícios
    </v-card-title>
    <v-table class="border rounded-xl">
      <thead class="bg-grey-lighten-4">
        <tr>
          <th class="text-left font-weight-medium py-4 px-4">Benefícios</th>
          <th class="text-center font-weight-medium">Basic</th>
          <th class="text-center font-weight-medium">Standard</th>
          <th class="text-center font-weight-medium">Security</th>
          <th class="text-center font-weight-medium">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in benefits" :key="item.name">
          <td class="py-3 px-4">{{ item.name }}</td>
          <td class="text-center">{{ item.basic ? "✅" : "—" }}</td>
          <td class="text-center">{{ item.standard ? "✅" : "—" }}</td>
          <td class="text-center">{{ item.security ? "✅" : "—" }}</td>
          <td class="text-center">{{ item.enterprise ? "✅" : "—" }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          name: "Mensagens automáticas de ausência",
          basic: true,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "Delegação de caixa de e-mail",
          basic: true,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "E-mails de múltiplos endereços",
          basic: true,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "Gerenciamento de usuários no Workspace",
          basic: true,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "Galeria de modelos ilimitados",
          basic: false,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "Agendamento de campanhas",
          basic: false,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "Assinaturas personalizadas de ausência",
          basic: false,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "Relatórios de apps conectados ao e-mail",
          basic: false,
          standard: true,
          security: true,
          enterprise: true,
        },
        {
          name: "Controle de acesso por horário e local",
          basic: false,
          standard: false,
          security: true,
          enterprise: true,
        },
        {
          name: "Turnos personalizados e desconexão",
          basic: false,
          standard: false,
          security: true,
          enterprise: true,
        },
        {
          name: "Migração de e-mails e arquivos",
          basic: false,
          standard: false,
          security: true,
          enterprise: true,
        },
        {
          name: "Relatórios de acessos e compartilhamentos",
          basic: false,
          standard: false,
          security: true,
          enterprise: true,
        },
        {
          name: "Integração com VR Gente (Pontomais)",
          basic: false,
          standard: false,
          security: false,
          enterprise: true,
        },
        {
          name: "Integração com Sólides (Tangerino)",
          basic: false,
          standard: false,
          security: false,
          enterprise: true,
        },
        {
          name: "Integração com Senior Sistemas",
          basic: false,
          standard: false,
          security: false,
          enterprise: true,
        },
        {
          name: "Integração com Active Directory (AD)",
          basic: false,
          standard: false,
          security: false,
          enterprise: true,
        },
        {
          name: "Integrações com outros sistemas",
          basic: false,
          standard: false,
          security: false,
          enterprise: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
th,
td {
  white-space: nowrap;
}
</style>
