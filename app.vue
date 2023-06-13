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
