<template>
    <div class="mb-12 pt-2 max-w-full">
        <div class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">

            <h3 class="my-4 text-2xl">Toggle</h3>

            <div class="my-6 flex items-center justify-center w-full mb-12">
                <label for="toggle" class="flex items-center cursor-pointer">
                    <div class="relative">
                        <input type="checkbox" id="toggle" class="opd-form-toggle sr-only">
                        <div class="block w-10 h-6 rounded-full"></div>
                        <div class="dot absolute left-1 top-1 w-4 h-4 rounded-full transition"></div>
                    </div>
                    <p class="ml-3 text-gray-700 font-medium">Toggle</p>
                </label>
            </div>

            <div class="my-6 flex items-center justify-center w-full mb-12">
                <label for="short-toogle" class="flex items-center cursor-pointer">
                    <div class="relative">
                        <input type="checkbox" id="short-toogle" class="opd-form-toggle sr-only" />
                        <div class="w-10 h-4 rounded-full shadow-inner"></div>
                        <div class="dot absolute w-6 h-6 rounded-full shadow border -left-1 -top-1 transition"></div>
                    </div>
                    <p class="ml-3 text-gray-700 font-medium">Short toggle</p>
                </label>
            </div> 

        </div>
    </div>
</template>
