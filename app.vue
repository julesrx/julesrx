<script setup lang="ts">
const config = useAppConfig();
useBouncer();
</script>

<template>
  <main>
    <header>
      <img src="/jules.png" :alt="config.title" />
    </header>

    <NuxtPage />
  </main>
</template>
