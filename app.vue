<script setup lang="ts">
const config = useAppConfig();

useBouncer();
</script>

<template>
  <Html class="font-sans" />

  <Body class="bg-[#0d1117] color-[#c9d1d9] lg:p-16 md:p-10 p-2 m-0 overflow-x-hidden" />

  <Head>
    <Meta name="title" :content="config.title" />
    <Meta name="description" :content="config.description" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta name="theme-color" :content="'#' + config.color" />
    <Meta name="apple-mobile-web-app-status-bar-style" content="default" />

    <!-- Twitter -->
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:site" content="@julesrafx" />
    <Meta name="twitter:title" :content="config.title" />
    <Meta name="twitter:description" :content="config.description" />
    <Meta name="twitter:image" :content="config.url + 'img/summary.png'" />

    <!-- Open Graph / Facebook -->
    <Meta property="og:title" :content="config.title" />
    <Meta property="og:type" content="website" />
    <Meta property="og:image" :content="config.url + 'img/summary.png'" />
    <Meta property="og:url" :content="config.url" />
    <Meta property="og:description" :content="config.description" />
    <Meta property="og:locale" content="fr_FR" />

    <Link rel="canonical" href="url" />
    <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

    <Title>{{ config.title }}</Title>
  </Head>

  <main>
    <header class="flex items-end mb-4 space-x-4 justify-between">
      <NuxtLink to="/">
        <img src="/favicon.ico" class="h-24 w-24 rounded-full" :alt="config.title" />
      </NuxtLink>
    </header>

    <NuxtPage />
  </main>
</template>
