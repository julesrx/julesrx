<script setup lang="ts">
useBouncer();

const { data } = await useFetch<{ login: string; avatar_url: string }>(
  'https://api.github.com/users/julesrx'
);
</script>

<template>
  <Html class="dark" />
  <Body class="bg-background font-white px-2 pt-2 sm:px-9 sm:pt-9 lg:px-14 lg:pt-14" />

  <main>
    <header class="z-10 relative inline-block">
      <NuxtLink to="/">
        <NuxtImg
          :src="data!.avatar_url.replace(/(\?|%3Fu).*$/, '')"
          format="webp"
          height="200"
          width="200"
          :alt="data?.login"
          class="rounded-full h-40 w-40"
        />
      </NuxtLink>

      <NuxtLink
        to="/music"
        class="absolute top-0 right-0 hidden sm:block"
        title="What do I listen to?"
        >🎶</NuxtLink
      >
    </header>

    <NuxtPage />
  </main>
</template>
