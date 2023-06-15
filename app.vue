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

      <NuxtLink to="/music" class="music" title="What do I listen to?">🎶</NuxtLink>
    </header>

    <NuxtPage />
  </main>
</template>
