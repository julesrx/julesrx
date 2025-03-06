<script setup lang="ts">
const classes = [
  'mt-4',
  'prose',
  'prose-invert',
  'prose-gray',
  'prose-h3:text-2xl',
  'prose-a:no-underline',
  'prose-a:text-primary',
  'prose-a:font-inherit',
  'prose-img:my-0',
  'prose-img:opacity-90',
  'prose-li:m-0',
  'prose-code:bg-secondary',
  'prose-code:before:content-none',
  'prose-code:after:content-none',
  'prose-code:rounded',
  'prose-code:font-light',
  'prose-ul:mb-4',
  'prose-p:my-4',
  'prose-headings:font-medium',
  'prose-h4:mt-4'
];

const { data: readme } = await useAsyncData(() =>
  queryCollection('content').path('/readme').first()
);
</script>

<template>
  <div>
    <ContentRenderer id="readme" :value="readme" tag="article" :class="classes" :head="false" />
  </div>
</template>
