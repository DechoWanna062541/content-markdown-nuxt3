<template>
    <div class="mb-12 pt-2 max-w-full">

        <div class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">

            <h3 class="my-4 text-2xl">Text</h3>

            <h4 class="my-4 text-lg">Default</h4>
            <div class="flex flex-wrap mb-4 mt-6">
                <div v-for="item in textColor" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl" :class="item.bgcolor">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
                <div v-for="item in textColorGray" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
                <div v-for="item in textColorGreen" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
                <div v-for="item in textColorYellow" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
                <div v-for="item in textColorBlue" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
                <div v-for="item in textColorPink" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
                <div v-for="item in textColorRed" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
                <div v-for="item in textColorOrange" :key="item.name" class="w-full md:w-48 mb-4 md:mr-4">
                    <div class="relative">
                        <div class="mb-2 flex-none w-full md:w-48 h-16 md:h-12 flex items-center justify-center border border-gray-300 rounded-xl">
                            <span class="text-3xl" :class="item.name">Aa</span>
                        </div>
                        <div class="inline-block text-sm text-gray-800 dark:text-gray-400 font-mono break-words">
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
const textColor = [
    { name: 'text-primary', code: '#1CB26B' },
    { name: 'text-white', code: '#ffffff', bgcolor: '#cccccc' },
    { name: 'text-black', code: '#000000', bgcolor: '#ffffff' },
    { name: 'text-green', code: '#1CB26B', bgcolor: '#ffffff' },
    { name: 'text-yellow', code: '#FFC72C', bgcolor: '#ffffff' },
    { name: 'text-blue', code: '#1F60AC', bgcolor: '#ffffff' },
    { name: 'text-pink', code: '#FF4D76', bgcolor: '#ffffff' },
    { name: 'text-red', code: '#EE443D', bgcolor: '#ffffff' },
    { name: 'text-orange', code: '#E88024', bgcolor: '#ffffff' }
]
const textColorGray = [
    { name: 'text-gray-50', code: '#f9fafb' },
    { name: 'text-gray-100', code: '#f3f4f6' },
    { name: 'text-gray-200', code: '#e5e7eb' },
    { name: 'text-gray-300', code: '#d1d5db' },
    { name: 'text-gray-400', code: '#9ca3af' },
    { name: 'text-gray-500', code: '#6b7280' },
    { name: 'text-gray-600', code: '#4b5563' },
    { name: 'text-gray-700', code: '#374151' },
    { name: 'text-gray-800', code: '#1f2937' },
    { name: 'text-gray-900', code: '#111827' }
]
const textColorGreen = [
    { name: 'text-green-50', code: '#F4FBF8' },
    { name: 'text-green-100', code: '#E8F7F0' },
    { name: 'text-green-200', code: '#D2F0E1' },
    { name: 'text-green-300', code: '#BBE8D3' },
    { name: 'text-green-400', code: '#A4E0C4' },
    { name: 'text-green-500', code: '#8DD9B5' },
    { name: 'text-green-600', code: '#77D1A6' },
    { name: 'text-green-700', code: '#60C997' },
    { name: 'text-green-800', code: '#49C189' },
    { name: 'text-green-900', code: '#33BA7A' }
]
const textColorYellow = [
    { name: 'text-yellow-50', code: '#FFFCF4' },
    { name: 'text-yellow-100', code: '#FFFAEA' },
    { name: 'text-yellow-200', code: '#FFF4D5' },
    { name: 'text-yellow-300', code: '#FFEFC0' },
    { name: 'text-yellow-400', code: '#FFE9AB' },
    { name: 'text-yellow-500', code: '#FFE396' },
    { name: 'text-yellow-600', code: '#FFDD80' },
    { name: 'text-yellow-700', code: '#FFD86C' },
    { name: 'text-yellow-800', code: '#FFD256' },
    { name: 'text-yellow-900', code: '#FFCD42' }
]
const textColorBlue = [
    { name: 'text-blue-50', code: '#F3F7FB' },
    { name: 'text-blue-100', code: '#E9F0F7' },
    { name: 'text-blue-200', code: '#D2DFEE' },
    { name: 'text-blue-300', code: '#BCD0E7' },
    { name: 'text-blue-400', code: '#A5BFDE' },
    { name: 'text-blue-500', code: '#8FB0D6' },
    { name: 'text-blue-600', code: '#79A0CD' },
    { name: 'text-blue-700', code: '#6390C5' },
    { name: 'text-blue-800', code: '#4C80BD' },
    { name: 'text-blue-900', code: '#3670B5' }
]
const textColorPink = [
    { name: 'text-pink-50', code: '#FFF6F8' },
    { name: 'text-pink-100', code: '#FFEEF2' },
    { name: 'text-pink-200', code: '#FFDBE4' },
    { name: 'text-pink-300', code: '#FFCAD6' },
    { name: 'text-pink-400', code: '#FFB8C8' },
    { name: 'text-pink-500', code: '#FFA6BB' },
    { name: 'text-pink-600', code: '#FF94AD' },
    { name: 'text-pink-700', code: '#FF83A0' },
    { name: 'text-pink-800', code: '#FF7191' },
    { name: 'text-pink-900', code: '#FF5F84' }
]
const textColorRed = [
    { name: 'text-red-50', code: '#FEF5F5' },
    { name: 'text-red-100', code: '#FEEDEC' },
    { name: 'text-red-200', code: '#FCDAD8' },
    { name: 'text-red-300', code: '#FAC7C5' },
    { name: 'text-red-400', code: '#F8B4B1' },
    { name: 'text-red-500', code: '#F7A29E' },
    { name: 'text-red-600', code: '#F58F8B' },
    { name: 'text-red-700', code: '#F47D78' },
    { name: 'text-red-800', code: '#F16964' },
    { name: 'text-red-900', code: '#F05751' }
]
const textColorOrange = [
    { name: 'text-orange-50', code: '#FEF8F4' },
    { name: 'text-orange-100', code: '#FDF3EA' },
    { name: 'text-orange-200', code: '#FAE6D3' },
    { name: 'text-orange-300', code: '#F9D9BE' },
    { name: 'text-orange-400', code: '#F6CCA7' },
    { name: 'text-orange-500', code: '#F4C092' },
    { name: 'text-orange-600', code: '#F1B37C' },
    { name: 'text-orange-700', code: '#EFA766' },
    { name: 'text-orange-800', code: '#ED9950' },
    { name: 'text-orange-900', code: '#EB8D3A' }
]
</script>