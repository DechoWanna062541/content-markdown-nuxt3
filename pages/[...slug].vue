<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main class="prose min-w-full">
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>
