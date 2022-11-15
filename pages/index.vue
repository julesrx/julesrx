<script setup lang="ts">
const { data } = await useFetch('/api/readme');
</script>

<template>
  <article v-html="data"></article>
</template>
