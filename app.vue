<script setup lang="ts">
import Bouncer from 'bouncing-element';

const appConfig = useAppConfig() as { title: string; description: string; url: string };

const title = appConfig.title;
const description = appConfig.description;
const url = appConfig.url;

onMounted(() => {
  Array(3)
    .fill(['🐧', '🌱', '👨‍💻', '🎮', '🍝', '🌈', '📀', '🏍', '🐸', '🚀'])
    .flat()
    .map(e => {
      const i = document.createElement('i');
      i.className = 'bounce';
      i.innerHTML = e;
      return i;
    })
    .forEach(e => document.body.appendChild(e));

  Array(3)
    .fill('/favicon.ico')
    .map(e => {
      const i = document.createElement('img');
      i.className = 'bounce';
      i.src = e;
      return i;
    })
    .forEach(e => document.body.appendChild(e));

  new Bouncer();
});
</script>

<template>
  <Head>
    <Meta name="title" :content="title" />
    <Meta name="description" :content="description" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta name="theme-color" content="#2ecc71" />
    <Meta name="apple-mobile-web-app-status-bar-style" content="default" />

    <!-- Twitter -->
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:site" content="@julesrafx" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:image" :content="url + 'img/summary.png'" />

    <!-- Open Graph / Facebook -->
    <Meta property="og:title" :content="title" />
    <Meta property="og:type" content="website" />
    <Meta property="og:image" :content="url + 'img/summary.png'" />
    <Meta property="og:url" :content="url" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:locale" content="fr_FR" />

    <Link rel="canonical" href="url" />
    <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

    <Title>{{ title }}</Title>
  </Head>

  <main>
    <NuxtPage />
  </main>
</template>
