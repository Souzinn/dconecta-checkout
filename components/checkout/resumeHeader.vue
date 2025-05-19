<template>
  <div>
    <div>
      <v-icon color="deep-purple-accent-4" class="mr-2"
        >mdi-check-circle</v-icon
      >
      <span class="text-caption font-weight-bold">TEST MODE</span>
    </div>

    <h2 class="text-h5 font-weight-bold mb-1">{{ plan.name }}</h2>
    <p class="text-body-2 mb-4">{{ plan.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  plan: {
    type: Object,
    default: null,
  },
});
</script>
