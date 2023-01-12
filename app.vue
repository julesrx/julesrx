<script setup lang="ts">
const config = useAppConfig();
useBouncer();
</script>

<template>
  <Html class="font-sans" />

  <Body
    class="bg-[#0d1117] color-[#c9d1d9] lg:px-14 lg:pt-14 md:px-9 md:pt-9 px-2 pt-2 m-0 overflow-x-hidden"
  />

  <main>
    <header class="flex items-end mb-4 space-x-4 justify-between">
      <NuxtLink to="/">
        <img src="/favicon.ico" class="h-24 w-24 rounded-full" :alt="config.title" />
      </NuxtLink>
    </header>

    <NuxtPage />
  </main>
</template>
