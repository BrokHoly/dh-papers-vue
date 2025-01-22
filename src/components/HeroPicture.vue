<script setup lang="ts">
import { computed } from 'vue'
import '../styles/HeroPictureStyle.css'

const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
  heroTag: {
    type: Number,
    required: true,
  },
})

const imageSrc = computed(() => {
  return `/src/assets/player_test/${props.userName.toLowerCase()}$${props.heroTag}.png`
})

const frameSrc = '/src/assets/dark-frame-shitty-crop.png'
</script>

<template>
  <div class="frameDiv">
    <div class="heroPicDiv">
      <img class="heroPic" :src="imageSrc" alt="Hero picture." />
    </div>
    <img class="frame" :src="frameSrc" alt="frame" />
  </div>
</template>

<style>
.frameDiv {
  position: relative;
  width: 50vh;
  height: 50vh;
}

.frame {
  position: absolute;
  height: 100%;
}

.heroPicDiv {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40vh;
  width: 40vh;
}

.heroPic {
  border-radius: 50%;
  height: 100%;
}
</style>
