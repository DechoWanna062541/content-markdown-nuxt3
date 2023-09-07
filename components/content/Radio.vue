<template>
    <div class="mb-12 pt-2 max-w-full">
        <div class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">

            <h3 class="my-4 text-2xl">Radio</h3>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio small</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-small-1" name="radio-small" type="radio" class="opd-form-radio-small" />
                            <input id="radio-small-2" name="radio-small" type="radio" class="opd-form-radio-small" checked />
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio list small</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-1">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-list-small-1" name="radio-list-small" type="radio" class="opd-form-radio-small" />
                            <label for="radio-list-small-1" class="opd-form-label-radio-small">Default radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-list-small-2" name="radio-list-small" type="radio" class="opd-form-radio-small" checked/>
                            <label for="radio-list-small-2" class="opd-form-label-radio-small">Default checked radio</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio disabled list small </h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-1">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-list-small-1" name="radio-disabled-list-small" type="radio" class="opd-form-radio-small" disabled />
                            <label for="radio-disabled-list-small-1" class="opd-form-label-radio-small">Disabled radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-list-small-2" name="radio-disabled-list-small" type="radio" class="opd-form-radio-small" disabled checked/>
                            <label for="radio-disabled-list-small-2" class="opd-form-label-radio-small">Disabled checked</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio inline list small</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex gap-x-6">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-inline-list-small-1" name="radio-inline-list-small" type="radio" class="opd-form-radio-small" />
                            <label for="radio-inline-list-small-1" class="opd-form-label-radio-small">Default radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-inline-list-small-2" name="radio-inline-list-small" type="radio" class="opd-form-radio-small" checked/>
                            <label for="radio-inline-list-small-2" class="opd-form-label-radio-small">Default checked radio</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio disabled inline list small</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex gap-x-6">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-inline-list-small-1" name="radio-disabled-inline-list-small" type="radio" class="opd-form-radio-small" disabled />
                            <label for="radio-disabled-inline-list-small-1" class="opd-form-label-radio-small">Default radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-inline-list-small-2" name="radio-disabled-inline-list-small" type="radio" class="opd-form-radio-small" disabled checked/>
                            <label for="radio-disabled-inline-list-small-2" class="opd-form-label-radio-small">Default checked radio</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio list with description small</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-1">
                        <div class="flex items-start gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-small-description-1" name="radio-list-small-description" type="radio" class="opd-form-radio-small" checked />
                            </div>
                            <div>
                                <label for="radio-list-small-description-1" class="opd-form-label-radio-small">Small</label>
                                <p>4 GB RAM / 2 CPUS / 80 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-small-description-2" name="radio-list-small-description" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div>
                                <label for="radio-list-small-description-2" class="opd-form-label-radio-small">Medium</label>
                                <p>8 GB RAM / 4 CPUS / 160 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-small-description-3" name="radio-list-small-description" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div>
                                <label for="radio-list-small-description-3" class="opd-form-label-radio-small">Large</label>
                                <p>16 GB RAM / 8 CPUS / 320 GB SSD Storage</p>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio list with inline description small</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-2">
                        <div class="flex items-center gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-inline-small-description-1" name="radio-list-inline-small-description" type="radio" class="opd-form-radio-small" checked />
                            </div>
                            <div class="flex items-center gap-x-1">
                                <label for="radio-list-inline-small-description-1" class="opd-form-label-radio-small">Small</label>
                                <p>4 GB RAM / 2 CPUS / 80 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-inline-small-description-2" name="radio-list-inline-small-description" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div class="flex items-center gap-x-1">
                                <label for="radio-list-inline-small-description-2" class="opd-form-label-radio-small">Medium</label>
                                <p>8 GB RAM / 4 CPUS / 160 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-inline-small-description-3" name="radio-list-inline-small-description" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div class="flex items-center gap-x-1">
                                <label for="radio-list-inline-small-description-3" class="opd-form-label-radio-small">Large</label>
                                <p>16 GB RAM / 8 CPUS / 320 GB SSD Storage</p>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">List description with radio on right small</h4>
                <div class="max-w-md w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-3 ">
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-description-radio-right-small-1" name="list-description-radio-right-small" type="radio" class="opd-form-radio-small" checked />
                            </div>
                            <div class="grow">
                                <label for="list-description-radio-right-small-1" class="opd-form-label-radio-small block">Checking</label>
                                <p>CIBC ••••6610</p>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-description-radio-right-small-2" name="list-description-radio-right-small" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div class="grow">
                                <label for="list-description-radio-right-small-2" class="opd-form-label-radio-small block">Savings</label>
                                <p>Bank of America ••••0149</p>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-description-radio-right-small-3" name="list-description-radio-right-small" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div class="grow">
                                <label for="list-description-radio-right-small-3" class="opd-form-label-radio-small block">Mastercard</label>
                                <p>Capital One ••••7877</p>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">List with radio on right small</h4>
                <div class="max-w-md w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-3 ">
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-radio-right-small-1" name="list-radio-right-small" type="radio" class="opd-form-radio-small" checked />
                            </div>
                            <div class="grow">
                                <label for="list-radio-right-small-1" class="opd-form-label-radio-small block">None</label>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-radio-right-small-2" name="list-radio-right-small" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div class="grow">
                                <label for="list-radio-right-small-2" class="opd-form-label-radio-small block">Baked beans</label>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-radio-right-small-3" name="list-radio-right-small" type="radio" class="opd-form-radio-small" />
                            </div>
                            <div class="grow">
                                <label for="list-radio-right-small-3" class="opd-form-label-radio-small block">Coleslaw</label>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-1" name="radio" type="radio" class="opd-form-radio" />
                            <input id="radio-2" name="radio" type="radio" class="opd-form-radio" checked />
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio list</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-2">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-list-1" name="radio-list" type="radio" class="opd-form-radio" />
                            <label for="radio-list-1" class="opd-form-label-radio">Default radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-list-2" name="radio-list" type="radio" class="opd-form-radio" checked/>
                            <label for="radio-list-2" class="opd-form-label-radio">Default checked radioe</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio disabled list </h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-2">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-list-1" name="radio-disabled-list" type="radio" class="opd-form-radio" disabled />
                            <label for="radio-disabled-list-1" class="opd-form-label-radio">Disabled radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-list-2" name="radio-disabled-list" type="radio" class="opd-form-radio" disabled checked/>
                            <label for="radio-disabled-list-2" class="opd-form-label-radio">Disabled checked</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio inline list</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex gap-x-6">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-inline-list-1" name="radio-inline-list" type="radio" class="opd-form-radio" />
                            <label for="radio-inline-list-1" class="opd-form-label-radio">Default radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-inline-list-2" name="radio-inline-list" type="radio" class="opd-form-radio" checked/>
                            <label for="radio-inline-list-2" class="opd-form-label-radio">Default checked radio</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio disabled inline list</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex gap-x-6">
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-inline-list-1" name="radio-disabled-inline-list" type="radio" class="opd-form-radio" disabled />
                            <label for="radio-disabled-inline-list-1" class="opd-form-label-radio">Default radio</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="radio-disabled-inline-list-2" name="radio-disabled-inline-list" type="radio" class="opd-form-radio" disabled checked/>
                            <label for="radio-disabled-inline-list-2" class="opd-form-label-radio">Default checked radio</label>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio list with description</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-2">
                        <div class="flex items-start gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-description-1" name="radio-list-description" type="radio" class="opd-form-radio" checked />
                            </div>
                            <div>
                                <label for="radio-list-description-1" class="opd-form-label-radio">Small</label>
                                <p>4 GB RAM / 2 CPUS / 80 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-description-2" name="radio-list-description" type="radio" class="opd-form-radio" />
                            </div>
                            <div>
                                <label for="radio-list-description-2" class="opd-form-label-radio">Medium</label>
                                <p>8 GB RAM / 4 CPUS / 160 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-description-3" name="radio-list-description" type="radio" class="opd-form-radio" />
                            </div>
                            <div>
                                <label for="radio-list-description-3" class="opd-form-label-radio">Large</label>
                                <p>16 GB RAM / 8 CPUS / 320 GB SSD Storage</p>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">Radio list with inline description</h4>
                <div class="w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-4">
                        <div class="flex items-center gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-inline-description-1" name="radio-list-inline-description" type="radio" class="opd-form-radio" checked />
                            </div>
                            <div class="flex items-center gap-x-1">
                                <label for="radio-list-inline-description-1" class="opd-form-label-radio">Small</label>
                                <p>4 GB RAM / 2 CPUS / 80 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-inline-description-2" name="radio-list-inline-description" type="radio" class="opd-form-radio" />
                            </div>
                            <div class="flex items-center gap-x-1">
                                <label for="radio-list-inline-description-2" class="opd-form-label-radio">Medium</label>
                                <p>8 GB RAM / 4 CPUS / 160 GB SSD Storage</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <div class="flex items-center h-6">
                                <input id="radio-list-inline-description-3" name="radio-list-inline-description" type="radio" class="opd-form-radio" />
                            </div>
                            <div class="flex items-center gap-x-1">
                                <label for="radio-list-inline-description-3" class="opd-form-label-radio">Large</label>
                                <p>16 GB RAM / 8 CPUS / 320 GB SSD Storage</p>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">List description with radio on right</h4>
                <div class="max-w-md w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-4">
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-description-radio-right-1" name="list-description-radio-right" type="radio" class="opd-form-radio" checked />
                            </div>
                            <div class="grow">
                                <label for="list-description-radio-right-1" class="opd-form-label-radio-small block">Checking</label>
                                <p>CIBC ••••6610</p>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-description-radio-right-2" name="list-description-radio-right" type="radio" class="opd-form-radio" />
                            </div>
                            <div class="grow">
                                <label for="list-description-radio-right-2" class="opd-form-label-radio block">Savings</label>
                                <p>Bank of America ••••0149</p>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-description-radio-right-3" name="list-description-radio-right" type="radio" class="opd-form-radio" />
                            </div>
                            <div class="grow">
                                <label for="list-description-radio-right-3" class="opd-form-label-radio block">Mastercard</label>
                                <p>Capital One ••••7877</p>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <!-- end -->
                </div>
            </div>

            <div class="mt-12 mb-8">
                <h4 class="mb-2">List with radio on right</h4>
                <div class="max-w-md w-full">
                    <!-- start -->
                    <div class="my-6 flex flex-col gap-y-4">
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-radio-right-1" name="list-radio-right" type="radio" class="opd-form-radio" checked />
                            </div>
                            <div class="grow">
                                <label for="list-radio-right-1" class="opd-form-label-radio block">None</label>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-radio-right-2" name="list-radio-right" type="radio" class="opd-form-radio" />
                            </div>
                            <div class="grow">
                                <label for="list-radio-right-2" class="opd-form-label-radio block">Baked beans</label>
                            </div>
                        </div>
                        <hr>
                        <div class="flex items-start gap-x-3 flex-row-reverse">
                            <div class="flex items-center h-6">
                                <input id="list-radio-right-3" name="list-radio-right" type="radio" class="opd-form-radio" />
                            </div>
                            <div class="grow">
                                <label for="list-radio-right-3" class="opd-form-label-radio block">Coleslaw</label>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <!-- end -->
                </div>
            </div>


        </div>
    </div>
</template>
