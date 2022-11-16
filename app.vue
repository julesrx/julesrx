<script setup lang="ts">
const config = useAppConfig();

const title = config.title;
const description = config.description;
const url = config.url;

useBouncer();
</script>

<template>
  <Body class="bg-[#0d1117] lg:p-16 md:p-10 p-2 font-sans m-0 overflow-x-hidden"></Body>

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
