<script setup lang="ts">
const config = useAppConfig();
useBouncer();
</script>

<template>
  <main>
    <header>
      <NuxtLink to="/">
        <NuxtImg src="/jules.png" format="webp" height="200" width="200" :alt="config.title" />
      </NuxtLink>

      <NuxtLink to="/music" class="music" title="What do I listen to?">🎶</NuxtLink>
    </header>

    <NuxtPage />
  </main>
</template>
