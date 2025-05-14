<template>
  <v-footer
    class="text-center d-flex flex-column ga-2 py-4"
    color="deep-purple-lighten-5"
  >
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <div class="text-caption font-weight-regular opacity-60">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum.
    </div>
  </v-footer>
</template>
<script setup>
const icons = ["mdi-github", "mdi-linkedin"];
</script>
