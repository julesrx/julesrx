<script setup lang="ts">
let albums = useMusic();
</script>

<template>
  <div style="display: grid; grid-template-columns: repeat(10, 1fr)">
    <NuxtLink
      :to="a.link"
      target="_blank"
      v-for="a in albums"
      :key="a.title"
      style="display: block"
    >
      <NuxtImg
        :src="a.poster"
        format="webp"
        height="200"
        width="200"
        :alt="a.title"
        style="display: block"
      />
    </NuxtLink>
  </div>
</template>
