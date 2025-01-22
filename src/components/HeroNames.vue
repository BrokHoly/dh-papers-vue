<script setup lang="ts">
import type { ProfileData } from '@/interfaces/interfaces'
import type { PropType } from 'vue'

const props = defineProps({
  profile: {
    type: Object as PropType<ProfileData>,
    required: true,
  },
})
</script>

<template>
  <div>
    <h1>{{ props.profile.heroName }}</h1>
    <p>{{ props.profile.playerName }}</p>
  </div>
</template>

<style></style>
