<script setup lang="ts">
import { ref } from 'vue'

import DATAS from '../assets/player_test/baba$2000.json' //ça ça dégagera bien sûr.

import type { PlayerData } from '@/interfaces/interfaces'

import HeroPicture from './HeroPicture.vue'
import HeroClass from './HeroClass.vue'
import HeroPlanet from './HeroPlanet.vue'

const playerData = ref<PlayerData>(DATAS)
const heroTag = ref<number>(playerData.value.character.tag)
const userName = ref<string>(playerData.value.user.username)
</script>

<template>
  <div>
    <HeroPicture :user-name="userName" :hero-tag="heroTag"></HeroPicture>
    <h1>{{ playerData.character.profile.heroName }}</h1>
    <p>{{ playerData.character.profile.playerName }}</p>
    <HeroClass
      :class="playerData.character.profile.career.class"
      :rank="playerData.character.profile.career.rank"
    ></HeroClass>
    <HeroPlanet :world-data="playerData.character.profile.origin"></HeroPlanet>
    <HeroDescription :desc="playerData.character.profile.description"></HeroDescription>
  </div>
</template>

<style></style>
