<template>
    <div class="mb-12 pt-2 max-w-full">
        <div class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">

            <h3 class="my-4 text-2xl">Input Field</h3>

            <div class="my-6">

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with label</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <label class="opd-form-label">Email</label>
                            <div class="mt-2">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" />
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>
                <!--<textarea disabled="true" class="opd-code min-w-full" rows="1"></textarea>-->

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with label and help text</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">Email</label>
                            <div class="mt-2">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" />
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with validation error</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">Email</label>
                            <div class="mt-2">
                                <input type="email" class="opd-form-input opd-form-feedback" placeholder="you@example.com"
                                    value="youexample.com" />
                                <p class="opd-form-explain">Please enter a valid email address.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with leading icon</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">Email</label>
                            <div class="mt-2 opd-form-input-group">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" />
                                <span class="opd-form-input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                        <path
                                            d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                    </svg>
                                </span>
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with leading icon and validation error</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">Email</label>
                            <div class="mt-2 opd-form-input-group">
                                <input type="email" class="opd-form-input opd-form-feedback" placeholder="you@example.com"
                                    value="you@example.com" />
                                <span class="opd-form-input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                        <path
                                            d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                    </svg>
                                </span>
                                <p class="opd-form-explain">Please enter a valid email address.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with leading icon</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">Password</label>
                            <div class="mt-2 opd-form-input-group">
                                <input type="password" class="opd-form-input" placeholder="Password" />
                                <span class="opd-form-input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with disabled state</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">Email</label>
                            <div class="mt-2">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" disabled />
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with hidden label</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="my-4">
                            <div class="mt-2">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" />
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

                <div class="mt-12 mb-8">
                    <h4 class="mb-2">Input with overlapping label</h4>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start -->
                        <div class="mt-6 mb-4 relative">
                            <label for="username" class="opd-form-overlapping-label after:content-['*']">Username</label>
                            <div class="mt-2">
                                <input name="username" type="text" class="opd-form-input" />
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


