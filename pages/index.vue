<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <img src="/favicon.ico" class="h-24 w-24 rounded-full mb-4" :alt="config.title" />

  <ContentDoc
    id="readme"
    path="/readme"
    tag="article"
    class="prose color-[#f0f6fc]"
    :head="false"
  />
</template>
