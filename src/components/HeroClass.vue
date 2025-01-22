<script setup lang="ts">
import { computed } from 'vue'
import { getRankName } from '../providers/ClassesProvider'

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

const rankName = computed(() => {
  return getRankName(props.class, props.rank, props.branch)
})
</script>

<template>
  <div>
    <p>
      <span>{{ props.class }}</span
      ><span v-if="specialize">/ {{ specialize }}</span>
    </p>
    <p>
      <span>rank:{{ props.rank }}</span>
      <span v-if="rankName">{{ rankName }}</span>
    </p>
  </div>
</template>
