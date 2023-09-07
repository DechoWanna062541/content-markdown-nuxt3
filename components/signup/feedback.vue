<template>
  <div class="opd-signup">
    <div class="mx-auto max-w-md w-full">
      <div class="opd-card">
        <div class="pb-4 opd-logo-register">
          <img
            class="mx-auto"
            src="../../assets/images/OPD-logo.svg"
            alt="open durian"
          />
        </div>
        <form>
          <div class="text-center">
            <h1 class="mb-5">สร้างบัญชีโอเพ่นดูเรียนใหม่</h1>
          </div>
          <div>
            <div class="my-4">
              <label class="opd-form-label after:content-['*']"
                >หมายเลขโทรศัพท์มือถือ</label
              >
              <div class="mt-2 relative opd-form-phone">
                <input
                  type="text"
                  name="phone"
                  autocomplete="phone"
                  class="opd-form-input opd-form-feedback pl-1"
                  maxlength="10"
                  placeholder=""
                />
                <div class="h-10 absolute inset-y-0 left-0 flex items-center">
                  <select id="country" name="country" class="opd-form-select">
                    <option value="TH +66" selected>TH +66</option>
                    <option value="EN +01">EN +01</option>
                  </select>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 opd-form-input-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="opd-form-explain">โปรดกรอกหมายเลขโทรศัพท์มือถือ</p>
              </div>
            </div>
            <div class="mt-4 mb-2 flex items-center justify-between">
              <div class="relative flex items-center gap-x-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
                <label for="remember" class="opd-form-label-checkbox-small"
                  >ข้าพเจ้ายอมรับ
                  <a href="#" class="text-blue hover:underline"
                    >ข้อตกลงเงื่อนไข</a
                  >
                  และ
                  <a href="#" class="text-blue hover:underline"
                    >นโยบายความเป็นส่วนตัว</a
                  >
                </label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <button type="submit" class="opd-btn opd-btn-primary w-full">
              สมัคร
            </button>
          </div>
          <div class="mt-6 opd-text-register">
            <p>
              มีบัญชีแล้วใช่ไหม?
              <a href="#" class="text-blue hover:underline">เข้าสู่ระบบ</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
