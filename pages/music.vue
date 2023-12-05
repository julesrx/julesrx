<script setup lang="ts">
const albums = useMusic();
const template = `repeat(${Math.floor(Math.sqrt(albums.length))}, 1fr)`;
</script>

<template>
    <div class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div
            class="grid gap-1"
            :style="{
                'grid-template-columns': template,
                'grid-template-rows': template
            }"
        >
            <NuxtLink
                v-for="(a, i) in albums"
                :key="i"
                :to="a.link"
                target="_blank"
                :title="`${a.title} - ${a.artist}`"
                class="block"
            >
                <NuxtImg
                    :src="`/albums/${a.poster}`"
                    format="webp"
                    height="50"
                    width="50"
                    class="block"
                    :alt="a.title"
                />
            </NuxtLink>
        </div>
    </div>
</template>
