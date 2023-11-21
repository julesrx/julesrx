<script setup lang="ts">
useBouncer();

const { data } = await useFetch<{ login: string; avatar_url: string }>(
  'https://api.github.com/users/julesrx'
);
</script>

<template>
  <main>
    <header>
      <NuxtLink to="/">
        <NuxtImg
          :src="data?.avatar_url.replace(/(\?|%3Fu).*$/, '')"
          format="webp"
          height="200"
          width="200"
          :alt="data?.login"
        />
      </NuxtLink>

      <NuxtLink to="/music" class="music" title="What do I listen to?"
        >🎶</NuxtLink
      >
    </header>

    <NuxtPage />
  </main>
</template>
