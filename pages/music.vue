<script setup lang="ts">
let albums = useMusic();
const template = `repeat(${Math.floor(Math.sqrt(albums.length))}, 1fr)`;
</script>

<template>
  <div id="mosaic-container">
    <div
      id="mosaic"
      :style="{
        'grid-template-columns': template,
        'grid-template-rows': template
      }"
    >
      <NuxtLink
        :to="a.link"
        target="_blank"
        v-for="(a, i) in albums"
        :key="i"
        :title="`${a.title} - ${a.artist}`"
      >
        <NuxtImg :src="`/albums/${a.poster}`" format="webp" height="50" width="50" :alt="a.title" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
#mosaic-container {
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #mosaic {
    display: grid;
    gap: 5px;

    a,
    img {
      display: block;
    }
  }
}
</style>
