<script setup lang="ts">
const config = useAppConfig();
useBouncer();
</script>

<template>
  <main>
    <header>
      <img src="/favicon.ico" :alt="config.title" />
    </header>

    <NuxtPage />
  </main>
</template>
