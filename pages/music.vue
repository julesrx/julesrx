<script setup lang="ts">
const albums = useMusic();
</script>

<template>
  <div>
    <div v-for="a in albums" :key="a.title">
      {{ a }}
      <NuxtImg :src="a.poster" format="webp" :alt="a.title" />
    </div>
  </div>
</template>
