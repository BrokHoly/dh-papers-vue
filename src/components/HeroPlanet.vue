<script setup lang="ts">
import type { OriginData } from '@/interfaces/interfaces'
import type { PropType } from 'vue'

const props = defineProps({
  worldData: {
    type: Object as PropType<OriginData>,
    required: true,
  },
})
</script>

<template>
  <div>
    <p>{{ props.worldData.world }}</p>
  </div>
</template>

<style></style>
