<script setup lang="ts">
import { createBouncer } from 'bouncing-element';

onMounted(() => {
  const emojis = ['🐧', '🌱', '👨‍💻', '🎮', '🍝', '🌈', '📀', '🎬', '🏍', '🐸', '🚀'];
  const els: HTMLElement[] = [
    ...Array(3)
      .fill(emojis)
      .flat()
      .map(e => {
        const i = document.createElement('span');
        i.className = 'bounce';
        i.innerHTML = e;
        return i;
      }),
    ...Array(3)
      .fill('/favicon.ico')
      .map(e => {
        const i = document.createElement('img');
        i.className = 'bounce';
        i.alt = 'Favicon';
        i.src = e;
        return i;
      })
  ];

  const { start, stop } = createBouncer(els, { start: false, insert: true });

  const preferredMotion = usePreferredReducedMotion();
  watch(preferredMotion, motion => (motion === 'reduce' ? stop() : start()), { immediate: true });

  onUnmounted(stop);
});

const { data } = await useFetch<{ login: string; avatar_url: string }>(
  'https://api.github.com/users/julesrx'
);
</script>

<template>
  <main>
    <Body class="bg-background font-white px-2 pt-2 sm:px-6 sm:pt-6 lg:px-10 lg:pt-10" />

    <header class="z-10 relative inline-block">
      <NuxtImg
        v-if="data"
        :src="data.avatar_url.replace(/(\?|%3Fu).*$/, '')"
        format="webp"
        height="200"
        width="200"
        :alt="data.login"
        class="rounded-full h-40 w-40"
      />
    </header>

    <NuxtPage />
  </main>
</template>
