<template>
    <div class="mb-12 pt-2 max-w-full">

        <div class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">
            <div style="position: relative">

                <h3 class="my-4 text-2xl">Background</h3>

                <h4 class="my-4 text-lg">Default</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColor" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="my-4 text-lg">Gray</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColorGray" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="my-4 text-lg">Green</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColorGreen" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="my-4 text-lg">Yellow</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColorYellow" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="my-4 text-lg">Blue</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColorBlue" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="my-4 text-lg">Pink</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColorPink" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="my-4 text-lg">Red</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColorRed" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="my-4 text-lg">Orange</h4>
                <div class="flex flex-wrap mb-4 mt-6">
                    <div v-for="item in bgColorOrange" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                        <div :class="item.name"
                            class="mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                        </div>
                        <div class="relative">
                            <div
                                class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
                                {{ item.name }}
                            </div>
                            <div class="text-sm text-gray-700 dark:text-gray-500 break-words">
                                {{ item.code }}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
const bgColor = [
    { name: 'bg-primary', code: '#1CB26B' },
    { name: 'bg-white', code: '#ffffff' },
    { name: 'bg-black', code: '#000000' },
    { name: 'bg-green', code: '#1CB26B' },
    { name: 'bg-yellow', code: '#FFC72C' },
    { name: 'bg-blue', code: '#1F60AC' },
    { name: 'bg-pink', code: '#FF4D76' },
    { name: 'bg-red', code: '#EE443D' },
    { name: 'bg-orange', code: '#E88024' }
]
const bgColorGray = [
    { name: 'bg-gray-50', code: '#f9fafb' },
    { name: 'bg-gray-100', code: '#f3f4f6' },
    { name: 'bg-gray-200', code: '#e5e7eb' },
    { name: 'bg-gray-300', code: '#d1d5db' },
    { name: 'bg-gray-400', code: '#9ca3af' },
    { name: 'bg-gray-500', code: '#6b7280' },
    { name: 'bg-gray-600', code: '#4b5563' },
    { name: 'bg-gray-700', code: '#374151' },
    { name: 'bg-gray-800', code: '#1f2937' },
    { name: 'bg-gray-900', code: '#111827' }
]
const bgColorGreen = [
    { name: 'bg-green-50', code: '#F4FBF8' },
    { name: 'bg-green-100', code: '#E8F7F0' },
    { name: 'bg-green-200', code: '#D2F0E1' },
    { name: 'bg-green-300', code: '#BBE8D3' },
    { name: 'bg-green-400', code: '#A4E0C4' },
    { name: 'bg-green-500', code: '#8DD9B5' },
    { name: 'bg-green-600', code: '#77D1A6' },
    { name: 'bg-green-700', code: '#60C997' },
    { name: 'bg-green-800', code: '#49C189' },
    { name: 'bg-green-900', code: '#33BA7A' }
]
const bgColorYellow = [
    { name: 'bg-yellow-50', code: '#FFFCF4' },
    { name: 'bg-yellow-100', code: '#FFFAEA' },
    { name: 'bg-yellow-200', code: '#FFF4D5' },
    { name: 'bg-yellow-300', code: '#FFEFC0' },
    { name: 'bg-yellow-400', code: '#FFE9AB' },
    { name: 'bg-yellow-500', code: '#FFE396' },
    { name: 'bg-yellow-600', code: '#FFDD80' },
    { name: 'bg-yellow-700', code: '#FFD86C' },
    { name: 'bg-yellow-800', code: '#FFD256' },
    { name: 'bg-yellow-900', code: '#FFCD42' }
]
const bgColorBlue = [
    { name: 'bg-blue-50', code: '#F3F7FB' },
    { name: 'bg-blue-100', code: '#E9F0F7' },
    { name: 'bg-blue-200', code: '#D2DFEE' },
    { name: 'bg-blue-300', code: '#BCD0E7' },
    { name: 'bg-blue-400', code: '#A5BFDE' },
    { name: 'bg-blue-500', code: '#8FB0D6' },
    { name: 'bg-blue-600', code: '#79A0CD' },
    { name: 'bg-blue-700', code: '#6390C5' },
    { name: 'bg-blue-800', code: '#4C80BD' },
    { name: 'bg-blue-900', code: '#3670B5' }
]
const bgColorPink = [
    { name: 'bg-pink-50', code: '#FFF6F8' },
    { name: 'bg-pink-100', code: '#FFEEF2' },
    { name: 'bg-pink-200', code: '#FFDBE4' },
    { name: 'bg-pink-300', code: '#FFCAD6' },
    { name: 'bg-pink-400', code: '#FFB8C8' },
    { name: 'bg-pink-500', code: '#FFA6BB' },
    { name: 'bg-pink-600', code: '#FF94AD' },
    { name: 'bg-pink-700', code: '#FF83A0' },
    { name: 'bg-pink-800', code: '#FF7191' },
    { name: 'bg-pink-900', code: '#FF5F84' }
]
const bgColorRed = [
    { name: 'bg-red-50', code: '#FEF5F5' },
    { name: 'bg-red-100', code: '#FEEDEC' },
    { name: 'bg-red-200', code: '#FCDAD8' },
    { name: 'bg-red-300', code: '#FAC7C5' },
    { name: 'bg-red-400', code: '#F8B4B1' },
    { name: 'bg-red-500', code: '#F7A29E' },
    { name: 'bg-red-600', code: '#F58F8B' },
    { name: 'bg-red-700', code: '#F47D78' },
    { name: 'bg-red-800', code: '#F16964' },
    { name: 'bg-red-900', code: '#F05751' }
]
const bgColorOrange = [
    { name: 'bg-orange-50', code: '#FEF8F4' },
    { name: 'bg-orange-100', code: '#FDF3EA' },
    { name: 'bg-orange-200', code: '#FAE6D3' },
    { name: 'bg-orange-300', code: '#F9D9BE' },
    { name: 'bg-orange-400', code: '#F6CCA7' },
    { name: 'bg-orange-500', code: '#F4C092' },
    { name: 'bg-orange-600', code: '#F1B37C' },
    { name: 'bg-orange-700', code: '#EFA766' },
    { name: 'bg-orange-800', code: '#ED9950' },
    { name: 'bg-orange-900', code: '#EB8D3A' }
]
</script>
