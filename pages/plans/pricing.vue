<template>
  <v-container>
    <ComplementsToggle @update="toggleValue = $event" />
    <PlansBoxplan :isAnnual="toggleValue" />
    <ComplementsTables />
    <ComplementsFaq />
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const toggleValue = ref(true);
</script>
