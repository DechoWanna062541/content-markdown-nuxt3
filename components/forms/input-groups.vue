
<template>
    <div class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">

        <h2 class="mb-4">Input Groups</h2>

        <div class="mb-10">
            <h4>Input with label</h4>
            <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-0 pt-12 pb-12 px-6">
                <div class="mx-auto max-w-screen-sm">
                    <form>
                        <div class="mx-auto max-w-md w-full">
                            <!-- start Input with label-->
                            <div class="my-4">
                                <label class="opd-form-label">Email</label>
                                <div class="mt-2">
                                    <input type="email" class="opd-form-input" placeholder="you@example.com" />
                                </div>
                            </div>
                            <!-- end -->
                        </div>
                    </form>
                </div>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="6">
                    <div class="my-4">
                        <label class="opd-form-label">Email</label>
                        <div class="mt-2">
                            <input type="email" class="opd-form-input" placeholder="you@example.com" />
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with label and help text</h4>

        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with label and help text -->
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">Email</label>
                            <div class="mt-2">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" />
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="7">
                    <div class="my-4">
                        <label class="opd-form-label">Email <span class="text-red">*</span></label>
                        <div class="mt-2">
                            <input type="email" class="opd-form-input" placeholder="you@example.com" />
                            <p class="opd-form-helptext">Please fill out this field.</p>
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with validation error</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with validation error -->
                        <div class="my-4">
                            <label class="opd-form-label">Email <span class="text-red">*</span></label>
                            <div class="mt-2">
                                <input type="email" class="opd-form-input opd-form-feedback" placeholder="you@example.com"
                                    value="youexample.com" />
                                <p class="opd-form-explain">Please enter a valid email address.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="7">
                    <div class="my-4">
                        <label class="opd-form-label">Email <span class="text-red">*</span></label>
                        <div class="mt-2">
                            <input type="email" class="opd-form-input opd-form-feedback" placeholder="you@example.com" value="youexample.com" />
                            <p class="opd-form-explain">Please enter a valid email address.</p>
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with leading icon</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with leading icon -->
                        <div class="my-4">
                            <label class="opd-form-label">Email <span class="text-red">*</span></label>
                            <div class="mt-2 opd-form-input-group">
                                <span class="opd-form-input-icon">
                                    <img src="icons/mail.svg" alt="icon mail" />
                                </span>
                                <input type="email" class="opd-form-input" placeholder="you@example.com" />
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>

            <textarea disabled="true" class="opd-code min-w-full" rows="10">
                    <div class="my-4">
                        <label class="opd-form-label">Email <span class="text-red">*</span></label>
                        <div class="mt-2 opd-form-input-group">
                            <span class="opd-form-input-icon">
                                <img src="icons/mail.svg" alt="icon mail" />
                            </span>
                            <input type="email" class="opd-form-input" placeholder="you@example.com" />
                            <p class="opd-form-helptext">Please fill out this field.</p>
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with leading icon and validation error</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with leading icon and validation error -->
                        <div class="my-4">
                            <label class="opd-form-label">Email <span class="text-red">*</span></label>
                            <div class="mt-2 opd-form-input-group">
                                <span class="opd-form-input-icon">
                                    <img src="icons/mail.svg" alt="icon mail" />
                                </span>
                                <input type="email" class="opd-form-input opd-form-feedback" placeholder="you@example.com"
                                    value="you@example.com" />
                                <p class="opd-form-explain">Please enter a valid email address.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="10">
                    <div class="my-4">
                        <label class="opd-form-label">Email <span class="text-red">*</span></label>
                        <div class="mt-2 opd-form-input-group">
                            <span class="opd-form-input-icon">
                                <img src="icons/mail.svg" alt="icon mail" />
                            </span>
                            <input type="email" class="opd-form-input opd-form-feedback" placeholder="you@example.com" value="you@example.com" />
                            <p class="opd-form-explain">Please enter a valid email address.</p>
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with leading icon</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with leading icon -->
                        <div class="my-4">
                            <label class="opd-form-label">Password <span class="text-red">*</span></label>
                            <div class="mt-2 opd-form-input-group">
                                <span class="opd-form-input-icon">
                                    <img src="icons/lock-closed.svg" alt="icon mail" />
                                </span>
                                <input type="password" class="opd-form-input" placeholder="Password" />
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="10">
                    <div class="my-4">
                        <label class="opd-form-label">Password <span class="text-red">*</span></label>
                        <div class="mt-2 opd-form-input-group">
                            <span class="opd-form-input-icon">
                                <img src="icons/lock-closed.svg" alt="icon mail" />
                            </span>
                            <input type="password" class="opd-form-input" placeholder="Password" />
                            <p class="opd-form-helptext">Please fill out this field.</p>
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with disabled state</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with disabled state-->
                        <div class="my-4">
                            <label class="opd-form-label">Email <span class="text-red">*</span></label>
                            <div class="mt-2">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" disabled />
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="6">
                    <div class="my-4">
                        <label class="opd-form-label">Email <span class="text-red">*</span></label>
                        <div class="mt-2">
                            <input type="email" class="opd-form-input" placeholder="you@example.com" disabled />
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with hidden label</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with hidden label-->
                        <div class="my-4">
                            <div class="mt-2">
                                <input type="email" class="opd-form-input" placeholder="you@example.com" />
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="5">
                    <div class="my-4">
                        <div class="mt-2">
                            <input type="email" class="opd-form-input" placeholder="you@example.com" />
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with overlapping label</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with overlapping label -->
                        <div class="mt-6 mb-4 relative">
                            <label for="username" class="opd-form-overlapping-label">Username</label>
                            <div class="mt-2">
                                <input name="username" type="text" class="opd-form-input" />
                                <p class="opd-form-helptext">Please fill out this field.</p>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="7">
                    <div class="mt-6 mb-4 relative">
                        <label for="username" class="opd-form-overlapping-label">Username</label>
                        <div class="mt-2">
                            <input name="username" type="text" class="opd-form-input" />
                            <p class="opd-form-helptext">Please fill out this field.</p>
                        </div>
                    </div></textarea>
        </div>

        <h4>Input with inline leading add-on and trailing dropdown</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Input with label and help text -->
                        <div class="my-4">

                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="7"></textarea>
        </div>

        <h4>Textarea input with label and help text</h4>
        <div class="bg-white mx-auto min-w-full border border-gray-200 rounded-2xl mt-2 mb-10 pt-12 pb-6 px-6">
            <div class="mx-auto max-w-screen-sm">
                <form>
                    <div class="mx-auto max-w-md w-full">
                        <!-- start Textarea input with label and help text -->
                        <div class="my-4">
                            <label class="opd-form-label">Address</label>
                            <div class="mt-2">
                                <textarea class="opd-form-textarea" rows="3" placeholder="Placeholder"></textarea>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </form>
            </div>
            <textarea disabled="true" class="opd-code min-w-full" rows="6">
                    <div class="my-4">
                        <label class="opd-form-label">Address</label>
                        <div class="mt-2">
                            <textarea class="opd-form-textarea" rows="3" placeholder="Placeholder" />
                        </div>
                    </div></textarea>
        </div>



    </div>
</template>
  
<script setup>

</script>