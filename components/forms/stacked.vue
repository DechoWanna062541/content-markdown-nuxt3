<template>
    <div class="mb-12 pt-2 max-w-full">
        <div class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border">

            <h3 class="my-4 text-2xl">Stacked</h3>

            <div class="mt-12 mb-8">
                <div class="mx-auto max-w-2xl w-full">
                    <!-- start -->
                    <div class="pb-12">

                        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                        
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div class="sm:col-span-4">
                                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                                <div class="mt-2">
                                    <div class="flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md border">
                                        <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                                        <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label class="opd-form-label">About</label>
                                <div class="mt-2">
                                    <textarea class="opd-form-textarea" rows="3" placeholder="Write your thoughts here..."></textarea>
                                    <p class="opd-form-helptext">Write a few sentences about yourself.</p>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="photo" class="block text-sm font-medium text-gray-700">Photo</label>
                                <div class="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <button type="button" class="rounded-xl bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="cover-photo" class="block text-sm font-medium text-gray-700">Cover photo</label>
                                <div class="mt-2 flex justify-center rounded-xl border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg class="w-12 h-12 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer bg-white font-semibold text-blue focus-within:outline-none hover:text-blue-800">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can
                            receive
                            mail.
                        </p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div class="sm:col-span-3">
                                <label for="first-name" class="opd-form-label">First name</label>
                                <div class="mt-2">
                                    <input type="text" class="opd-form-input" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="last-name" class="opd-form-label">Last name</label>
                                <div class="mt-2">
                                    <input type="text" class="opd-form-input" />
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="email" class="opd-form-label">Email address</label>
                                <div class="mt-2">
                                    <input type="email" class="opd-form-input" placeholder="you@example.com" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="country" class="opd-form-label">Country</label>
                                <div class="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" class="opd-form-label">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="street-address" class="opd-form-label">Street address</label>
                                <div class="mt-2">
                                    <input type="text" class="opd-form-input" />
                                </div>
                            </div>

                            <div class="sm:col-span-2 sm:col-start-1">
                                <label for="city" class="opd-form-label">City</label>
                                <div class="mt-2">
                                    <input type="text" class="opd-form-input" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="region" class="opd-form-label">State / Province</label>
                                <div class="mt-2">
                                    <input type="text" class="opd-form-input" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="postal-code" class="opd-form-label">ZIP / Postal code</label>
                                <div class="mt-2">
                                    <input type="text" class="opd-form-input" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                        <div class="mt-10 space-y-10">
                            <fieldset>
                                <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                                <div class="mt-6 space-y-2">
                                    <div class="relative flex gap-x-3">
                                        <div class="flex h-6 items-center">
                                            <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        </div>
                                        <div class="text-sm leading-6">
                                            <label for="comments" class="font-medium text-gray-900">Comments</label>
                                            <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                        </div>
                                    </div>
                                    <div class="relative flex gap-x-3">
                                        <div class="flex h-6 items-center">
                                            <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        </div>
                                        <div class="text-sm leading-6">
                                            <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                                            <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                        </div>
                                    </div>
                                    <div class="relative flex gap-x-3">
                                        <div class="flex h-6 items-center">
                                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        </div>
                                        <div class="text-sm leading-6">
                                            <label for="offers" class="font-medium text-gray-900">Offers</label>
                                            <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                                <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                                
                                <div class="mt-6 space-y-2">
                                    <div class="flex items-center gap-x-3">
                                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                                    </div>
                                    <div class="flex items-center gap-x-3">
                                        <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                                    </div>
                                    <div class="flex items-center gap-x-3">
                                        <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                                    </div>
                                </div>

                            </fieldset>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-end gap-x-4">
                        <button type="button" class="opd-btn opd-btn-cancel">Cancel</button>
                        <button type="submit" class="opd-btn opd-btn-primary">Save</button>
                    </div>
                    <!-- end -->
                </div>
            </div>
        </div>
    </div>
</template>
