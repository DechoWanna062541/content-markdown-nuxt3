<template>
    <div class="mb-12 pt-2 max-w-full">

        <div class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">

            <h3 class="my-4 text-2xl">Border</h3>

            <h4 class="my-4 text-lg">Default</h4>
            <div class="flex flex-wrap mb-4 mt-6">
                <div v-for="item in borderColor" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
                <div v-for="item in borderColorGray" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
                <div v-for="item in borderColorGreen" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
                <div v-for="item in borderColorYellow" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
                <div v-for="item in borderColorBlue" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
                <div v-for="item in borderColorPink" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
                <div v-for="item in borderColorRed" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
                <div v-for="item in borderColorOrange" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div :class="item.name" class="border-2 mb-2 flex-none w-full md:w-48 h-12 flex items-center justify-center rounded-xl">
                    </div>
                    <div class="relative">
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono hover:text-teal-600 dark-hover:text-teal-400 break-words">
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
</template>

<script setup>
const borderColor = [
    { name: 'border-primary', code: '#1CB26B' },
    { name: 'border-white', code: '#ffffff' },
    { name: 'border-black', code: '#000000' },
    { name: 'border-green', code: '#1CB26B' },
    { name: 'border-yellow', code: '#FFC72C' },
    { name: 'border-blue', code: '#1F60AC' },
    { name: 'border-pink', code: '#FF4D76' },
    { name: 'border-red', code: '#EE443D' },
    { name: 'border-orange', code: '#E88024' }
]
const borderColorGray = [
    { name: 'border-gray-50', code: '#f9fafb' },
    { name: 'border-gray-100', code: '#f3f4f6' },
    { name: 'border-gray-200', code: '#e5e7eb' },
    { name: 'border-gray-300', code: '#d1d5db' },
    { name: 'border-gray-400', code: '#9ca3af' },
    { name: 'border-gray-500', code: '#6b7280' },
    { name: 'border-gray-600', code: '#4b5563' },
    { name: 'border-gray-700', code: '#374151' },
    { name: 'border-gray-800', code: '#1f2937' },
    { name: 'border-gray-900', code: '#111827' }
]
const borderColorGreen = [
    { name: 'border-green-50', code: '#F4FBF8' },
    { name: 'border-green-100', code: '#E8F7F0' },
    { name: 'border-green-200', code: '#D2F0E1' },
    { name: 'border-green-300', code: '#BBE8D3' },
    { name: 'border-green-400', code: '#A4E0C4' },
    { name: 'border-green-500', code: '#8DD9B5' },
    { name: 'border-green-600', code: '#77D1A6' },
    { name: 'border-green-700', code: '#60C997' },
    { name: 'border-green-800', code: '#49C189' },
    { name: 'border-green-900', code: '#33BA7A' }
]
const borderColorYellow = [
    { name: 'border-yellow-50', code: '#FFFCF4' },
    { name: 'border-yellow-100', code: '#FFFAEA' },
    { name: 'border-yellow-200', code: '#FFF4D5' },
    { name: 'border-yellow-300', code: '#FFEFC0' },
    { name: 'border-yellow-400', code: '#FFE9AB' },
    { name: 'border-yellow-500', code: '#FFE396' },
    { name: 'border-yellow-600', code: '#FFDD80' },
    { name: 'border-yellow-700', code: '#FFD86C' },
    { name: 'border-yellow-800', code: '#FFD256' },
    { name: 'border-yellow-900', code: '#FFCD42' }
]
const borderColorBlue = [
    { name: 'border-blue-50', code: '#F3F7FB' },
    { name: 'border-blue-100', code: '#E9F0F7' },
    { name: 'border-blue-200', code: '#D2DFEE' },
    { name: 'border-blue-300', code: '#BCD0E7' },
    { name: 'border-blue-400', code: '#A5BFDE' },
    { name: 'border-blue-500', code: '#8FB0D6' },
    { name: 'border-blue-600', code: '#79A0CD' },
    { name: 'border-blue-700', code: '#6390C5' },
    { name: 'border-blue-800', code: '#4C80BD' },
    { name: 'border-blue-900', code: '#3670B5' }
]
const borderColorPink = [
    { name: 'border-pink-50', code: '#FFF6F8' },
    { name: 'border-pink-100', code: '#FFEEF2' },
    { name: 'border-pink-200', code: '#FFDBE4' },
    { name: 'border-pink-300', code: '#FFCAD6' },
    { name: 'border-pink-400', code: '#FFB8C8' },
    { name: 'border-pink-500', code: '#FFA6BB' },
    { name: 'border-pink-600', code: '#FF94AD' },
    { name: 'border-pink-700', code: '#FF83A0' },
    { name: 'border-pink-800', code: '#FF7191' },
    { name: 'border-pink-900', code: '#FF5F84' }
]
const borderColorRed = [
    { name: 'border-red-50', code: '#FEF5F5' },
    { name: 'border-red-100', code: '#FEEDEC' },
    { name: 'border-red-200', code: '#FCDAD8' },
    { name: 'border-red-300', code: '#FAC7C5' },
    { name: 'border-red-400', code: '#F8B4B1' },
    { name: 'border-red-500', code: '#F7A29E' },
    { name: 'border-red-600', code: '#F58F8B' },
    { name: 'border-red-700', code: '#F47D78' },
    { name: 'border-red-800', code: '#F16964' },
    { name: 'border-red-900', code: '#F05751' }
]
const borderColorOrange = [
    { name: 'border-orange-50', code: '#FEF8F4' },
    { name: 'border-orange-100', code: '#FDF3EA' },
    { name: 'border-orange-200', code: '#FAE6D3' },
    { name: 'border-orange-300', code: '#F9D9BE' },
    { name: 'border-orange-400', code: '#F6CCA7' },
    { name: 'border-orange-500', code: '#F4C092' },
    { name: 'border-orange-600', code: '#F1B37C' },
    { name: 'border-orange-700', code: '#EFA766' },
    { name: 'border-orange-800', code: '#ED9950' },
    { name: 'border-orange-900', code: '#EB8D3A' }
]
</script>