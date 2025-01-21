<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  branch: {
    type: Number,
    required: false,
  },
  specialize: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>
    <p>
      <span>{{ props.class }}</span
      ><span v-if="specialize">/ {{ specialize }}</span>
    </p>
    <span>rank:{{}}</span>
  </div>
</template>
