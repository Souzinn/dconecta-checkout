<template>
  <div class="d-flex justify-center">
    <v-card class="pa-0 rounded-pill" style="width: fit-content">
      <v-btn-toggle
        :model-value="checked ? 'yearly' : 'monthly'"
        mandatory
        class="rounded-pill"
        color="primary"
        @update:model-value="
          (val) => {
            checked = val === 'yearly';
            emitToggle();
          }
        "
        style="background: #f6f7f9"
      >
        <v-btn
          :class="!checked ? 'font-weight-bold' : 'text-grey'"
          variant="text"
          style="min-width: 50px; padding: 2px 12px"
          :ripple="false"
          value="monthly"
        >
          Mensal
        </v-btn>
        <v-btn
          :class="checked ? 'font-weight-bold' : 'text-grey'"
          variant="text"
          style="min-width: 50px; padding: 2px 12px"
          :ripple="false"
          value="yearly"
        >
          Anual

          <span class="text-blue ms-1" style="font-size: 0.75em">
            economize 20%
          </span>
        </v-btn>
      </v-btn-toggle>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["update"]);

const checked = ref(true);

function emitToggle() {
  emit("update", checked.value);
}
</script>
