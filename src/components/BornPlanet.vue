<script setup lang="ts">
const props = defineProps({
  world: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <p>{{ props.world }}</p>
  </div>
</template>
