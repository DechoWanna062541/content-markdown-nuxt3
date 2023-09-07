<template>
  <div class="bg-gray-100 dark:bg-midnight">
    <div class="px-3 flex">
      <div
        class="hidden md:block flex-none h-full overflow-y-auto top-0 sticky max-h-screen"
      >
        <nav class="pt-2 pr-20 pb-12 px-3 h-full">
          <h3 class="pt-4 pb-1 text-blue">Colors</h3>
          <NuxtLink to="/background" class="relative flex items-center py-1">
            Background
          </NuxtLink>
          <NuxtLink to="/bordercolor" class="relative flex items-center py-1">
            Border
          </NuxtLink>
          <NuxtLink to="/textcolor" class="relative flex items-center py-1">
            Text
          </NuxtLink>

          <h3 class="pt-4 pb-1 text-blue">Typography</h3>

          <NuxtLink to="/fontfamily" class="relative flex items-center py-1">
            Font Family
          </NuxtLink>
          <NuxtLink to="/fontsize" class="relative flex items-center py-1">
            Font Size
          </NuxtLink>
          <NuxtLink to="/lists" class="relative flex items-center py-1">
            Lists
          </NuxtLink>

          <h3 class="pt-4 pb-1 text-blue">Forms</h3>

          <NuxtLink to="/inputfield" class="relative flex items-center py-1">
            Input Field
          </NuxtLink>
          <NuxtLink to="/fileinput" class="relative flex items-center py-1">
            File Input
          </NuxtLink>
          <NuxtLink to="/searchinput" class="relative flex items-center py-1">
            Search Input
          </NuxtLink>
          <NuxtLink to="/select" class="relative flex items-center py-1">
            Select
          </NuxtLink>
          <NuxtLink to="/textarea" class="relative flex items-center py-1">
            Text Area
          </NuxtLink>
          <NuxtLink to="/checkbox" class="relative flex items-center py-1">
            Checkbox
          </NuxtLink>
          <NuxtLink to="/radio" class="relative flex items-center py-1">
            Radio
          </NuxtLink>
          <NuxtLink to="/toggle" class="relative flex items-center py-1">
            Toggle
          </NuxtLink>

          <h3 class="pt-4 pb-1 text-blue">Components</h3>
          <a href="#Cards" class="relative flex items-center py-1"> Cards </a>

          <h3 class="pt-4 pb-1 text-blue">Elements</h3>
          <NuxtLink to="/header" class="relative flex items-center py-1">
            Header
          </NuxtLink>
          <a href="#Footer" class="relative flex items-center py-1"> Footer </a>

          <h3 class="pt-4 pb-1 text-blue">Page Examples</h3>
          <a
            href="/404-pages"
            target="_blank"
            class="relative flex items-center py-1"
          >
            404 Pages
          </a>

          <h3 class="pt-4 pb-1 text-blue">Signin Simple Page</h3>
          <a
            href="/signin-simple"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Simple
          </a>
          <a
            href="/signin-simple-feedback"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Simple Invalid feedback Page
          </a>
          <a
            href="/signin-simple-verficationcode"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Simple Verfication Code
          </a>
          <a
            href="/signin-simple-forgotpassword"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Simple Forgot Password
          </a>

          <h3 class="pt-4 pb-1 text-blue">Signup Simple Page</h3>
          <a
            href="/signup-simple"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Simple
          </a>
          <a
            href="/signup-simple-feedback"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Simple Invalid feedback Page
          </a>
          <a
            href="/signup-simple-verficationcode"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Simple Verfication Code
          </a>
          <a
            href="/signup-simple-settingpassword"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Split Simple Setting Password
          </a>

          <h3 class="pt-4 pb-1 text-blue">Signin Split screen Page</h3>
          <a
            href="/signin-splitscreen"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Split screen
          </a>
          <a
            href="/signin-splitscreen-feedback"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Split screen Invalid feedback Page
          </a>
          <a
            href="/signin-splitscreen-verficationcode"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Split screen Verfication Code
          </a>
          <a
            href="/signin-splitscreen-forgotpassword"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signin Split screen Forgot Password
          </a>

          <h3 class="pt-4 pb-1 text-blue">Signup Split screen Page</h3>
          <a
            href="/signup-splitscreen"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Split screen
          </a>
          <a
            href="/signup-splitscreen-feedback"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Split screen Invalid feedback Page
          </a>
          <a
            href="/signup-splitscreen-verficationcode"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Split screen Verfication Code
          </a>
          <a
            href="/signup-splitscreen-settingpassword"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Signup Split screen Setting Password
          </a>

          <h3 class="pt-4 pb-1 text-blue">Extend</h3>
          <a
            href="https://heroicons.com/"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Hero Icons
          </a>
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            class="relative flex items-center py-1"
          >
            Docs Tailwind CSS
          </a>
        </nav>
      </div>
      <div class="md:pl-4 w-full">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
@import '~/assets/scss/app.scss';
.opd-header {
  position: relative;
}
</style>
