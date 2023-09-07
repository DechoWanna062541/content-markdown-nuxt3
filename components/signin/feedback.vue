<template>
  <div class="opd-signin">
    <div class="mx-auto max-w-md w-full md:min-h-full">
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
            <h1 class="mb-5">เข้าสู่ระบบโอเพ่นดูเรียน</h1>
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
            <div class="my-4">
              <label class="opd-form-label after:content-['*']">รหัสผ่าน</label>
              <div class="mt-2 relative">
                <input
                  name="password"
                  type="password"
                  class="opd-form-input opd-form-feedback"
                  value="123456"
                />
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
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 opd-form-input-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                      clip-rule="evenodd"
                    />
                    <path
                      d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z"
                    />
                  </svg>
                </a>
                <p class="opd-form-explain">โปรดกรอกรหัสผ่าน</p>
              </div>
            </div>
            <div class="mt-4 mb-2 flex items-center justify-between">
              <div class="relative flex items-center gap-x-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                  checked
                />
                <label for="remember" class="opd-form-label-checkbox-small"
                  >จำชื่อผู้ใช้</label
                >
              </div>
              <div>
                <p>
                  <a href="#" class="text-blue underline">ลืมรหัสผ่าน?</a>
                </p>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <button type="submit" class="opd-btn opd-btn-primary w-full">
              เข้าสู่ระบบ
            </button>
          </div>
          <div class="py-5 relative">
            <hr />
            <span class="opd-text-or">หรือล็อคอินด้วยโซเชียล</span>
          </div>
          <div class="text-center">
            <div class="flex gap-x-4">
              <button type="submit" class="flex-1 opd-btn opd-btn-social">
                <img src="icons/google.svg" alt="Icon Google" />
                Google
              </button>
              <button type="submit" class="flex-1 opd-btn opd-btn-social">
                <img src="icons/facebook.svg" alt="Icon Facebook" />
                Facebook
              </button>
            </div>
          </div>
          <div class="mt-6 opd-text-register">
            <p>
              ยังไม่เคยมีบัญชี?
              <a href="#" class="text-blue hover:underline">ลงทะเบียนได้เลย</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
