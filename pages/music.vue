<script setup lang="ts">
let albums = useMusic();
const gridSize = Math.ceil(Math.sqrt(albums.length));
</script>

<template>
  <div id="mosaic-container">
    <div
      id="mosaic"
      :style="{
        'grid-template-columns': `repeat(${gridSize}, 1fr)`,
        'grid-template-rows': `repeat(${gridSize}, 1fr)`
      }"
    >
      <NuxtLink
        :to="a.link"
        target="_blank"
        v-for="a in albums"
        :key="a.title"
        :title="`${a.title} - ${a.artist}`"
      >
        <NuxtImg :src="a.poster" format="webp" height="50" width="50" :alt="a.title" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
