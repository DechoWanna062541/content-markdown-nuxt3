# header

:HeaderTest

```html
<header class="opd-header">
  <div class="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-shrink-0">
        <img
          class=""
          src="../../assets/images/OPD-logo.svg"
          alt="open durian"
        />
      </div>
      <div class="hidden md:block">
        <div class="ml-6 lg:ml-8 flex items-baseline space-x-4">
          <a
            v-for="item in mainmenu"
            :key="item.name"
            :href="item.href"
            :class="[
                item.current
                  ? ' text-green px-1 lg:px-3 py-2 text-sm font-medium'
                  : 'text-gray-900 hover:text-blue-800 hover:underline',
                ' px-1 lg:px-3 py-2 text-sm font-medium',
              ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div class="hidden md:flex md:flex-1 md:justify-end">
        <a
          href="#"
          class="text-green hover:text-green-400 hover:underline py-2 text-sm font-medium"
          >ล็อคอิน /สมัครสมาชิก</a
        >
      </div>
    </div>
  </div>
</header>
<script setup>
  const mainmenu = [
    { name: 'คอร์สเรียน', href: '#', current: true },
    { name: 'ร้านหนังสือ', href: '#', current: false },
    { name: 'คลังข้อสอบ', href: '#', current: false },
    { name: 'คลังความรู้', href: '#', current: false },
    { name: 'เกี่ยวกับเรา', href: '#', current: false },
  ];
</script>
```
