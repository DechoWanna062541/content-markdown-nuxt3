<template>
    <div class="mb-12 pt-2 max-w-full">
        <div class="bg-gray-100 dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">
            <h3 class="my-4 text-2xl">404 Pages</h3>

            <Feedback></Feedback>

        </div>
    </div>
</template>
  
<script>
import Feedback from "~/components/404-pages/index.vue";
export default {
    components: {
        Feedback,
    },
};
</script>