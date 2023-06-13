<script setup lang="ts">
const config = useAppConfig();
useBouncer();
</script>

<template>
  <main>
    <header>
      <NuxtLink to="/">
        <img src="/jules.png" :alt="config.title" />
      </NuxtLink>

      <NuxtLink to="/music" class="music">🎶</NuxtLink>
    </header>

    <NuxtPage />
  </main>
</template>

<style scoped lang="scss">
header {
  position: relative;

  .music {
    position: absolute;
    right: 0;
  }
}
</style>
