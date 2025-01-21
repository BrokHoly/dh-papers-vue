<script setup lang="ts">
import { onMounted, ref } from 'vue'

import '../styles/ProfileStyle.css'

import DATAS from '../assets/player_test/baba.json' //ça ça dégagera bien sûr.

import type { PlayerData } from '@/interfaces/interfaces'

import HeroPicture from './HeroPicture.vue'

const playerData: PlayerData = DATAS
const heroName = ref<string>('')
const heroTag = ref<number>(-1)
const userID = ref<string>('')

onMounted(() => {
  heroName.value = playerData.character.profile.heroName
  heroTag.value = playerData.character.tag
  userID.value = playerData.user.username
})
</script>

<template>
  <div>
    <h1>{{ heroName }}</h1>
    <div>SALUT MOUAHAHAHA</div>
    <HeroPicture :user-i-d="userID" :hero-tag="heroTag"></HeroPicture>
  </div>
</template>
