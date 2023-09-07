<template>
  <div class="mb-12 pt-2 max-w-full">
    <div
      class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border"
    >
      <h3 class="my-4 text-2xl">File Input</h3>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">File upload</h4>
        <div class="mx-auto max-w-md w-full">
          <!-- start -->
          <div class="my-6">
            <label class="opd-form-label" for="file-input">Upload file</label>
            <div class="mt-2">
              <input
                class="opd-form-file-input"
                type="file"
                id="file-input"
                name="file-input"
              />
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">File upload and help text</h4>
        <div class="mx-auto max-w-md w-full">
          <!-- start -->
          <div class="my-6">
            <label
              class="opd-form-label after:content-['*']"
              for="file-input-helptext"
              >Upload file</label
            >
            <div class="mt-2">
              <input
                class="opd-form-file-input"
                type="file"
                id="file-input-helptext"
                name="file-input-helptext"
              />
              <p class="opd-form-helptext">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">File upload with validation error</h4>
        <div class="mx-auto max-w-md w-full">
          <!-- start -->
          <div class="my-6">
            <label class="opd-form-label after:content-['*']" for="file-input-2"
              >Upload file</label
            >
            <div class="mt-2">
              <input
                class="opd-form-file-input opd-form-feedback"
                type="file"
                id="file-input-2"
                name="file-input-2"
              />
              <p class="opd-form-explain">Please enter a valid file</p>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Dropzone</h4>
        <div class="mx-auto max-w-md w-full">
          <!-- start -->
          <div class="my-6">
            <div class="opd-dropzone mt-2 px-6 py-10">
              <div class="text-center">
                <svg
                  class="w-12 h-12 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div
                  class="mt-4 flex text-sm leading-6 text-gray-600 items-center"
                >
                  <label for="file-upload" class="opd-form-label-dropzone">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>
    </div>
  </div>
</template>
