<template>
    <div class="mb-12 pt-2 max-w-full">
        <div class="bg-gray-100 dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">
            <h3 class="my-4 text-2xl">Footer</h3>

            <Footer></Footer>

        </div>
    </div>
</template>

<script>
import Footer from "~/components/page-sections/footer.vue";
export default {
    components: {
        Footer,
    },
};
</script>