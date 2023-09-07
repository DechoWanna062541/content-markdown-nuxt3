<template>
  <div class="opd-bg-signup">
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
          <div class="flex flex-1 justify-end">
            <p class="py-2 text-sm flex items-center gap-x-2">
              <span class="hidden md:block">มีบัญชีแล้วใช่ไหม?</span>
              <a
                href="signin"
                class="flex items-center gap-x-1 text-green hover:text-green-400 hover:underline font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                เข้าสู่ระบบ
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>

    <div class="opd-signup">
      <div class="mx-auto max-w-md w-full">
        <div class="opd-card">
          <form>
            <div class="text-center">
              <h1 class="mb-5">สร้างบัญชีโอเพ่นดูเรียนใหม่</h1>
            </div>
            <div>
              <div class="my-4">
                <label class="opd-form-label after:content-['*']"
                  >หมายเลขโทรศัพท์มือถือ</label
                >
                <div class="mt-2 opd-form-phone">
                  <input
                    type="text"
                    name="phone"
                    autocomplete="phone"
                    class="opd-form-input pl-1"
                    maxlength="10"
                    placeholder=""
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center">
                    <select id="country" name="country" class="opd-form-select">
                      <option value="TH +66" selected>TH +66</option>
                      <option value="EN +01">EN +01</option>
                    </select>
                  </div>
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
          </form>
        </div>
      </div>
    </div>

    <div class="opd-signup">
      <div class="mx-auto max-w-md w-full">
        <div class="opd-card">
          <form>
            <div class="text-center">
              <h1 class="mb-5">สร้างบัญชีโอเพ่นดูเรียนใหม่</h1>
            </div>
            <div>
              <div class="my-4">
                <label class="opd-form-label after:content-['*']"
                  >หมายเลขโทรศัพท์มือถือ</label
                >
                <div class="mt-2 opd-form-phone">
                  <input
                    type="text"
                    name="phone"
                    autocomplete="phone"
                    class="opd-form-input pl-1"
                    maxlength="10"
                    placeholder=""
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center">
                    <select id="country" name="country" class="opd-form-select">
                      <option value="TH +66" selected>TH +66</option>
                      <option value="EN +01">EN +01</option>
                    </select>
                  </div>
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
          </form>
        </div>
      </div>
    </div>

    <div class="opd-signup">
      <div class="mx-auto max-w-md w-full">
        <div class="opd-card">
          <form>
            <div class="text-center">
              <h1 class="mb-5">สร้างบัญชีโอเพ่นดูเรียนใหม่</h1>
              <h4>ยืนยัน SMS-OTP</h4>
              <p>
                เพื่อเพิ่มความปลอดภัย ต้องใช้ SMS One-time Password (OTP)
                เพื่อยืนยันตัวตน โปรดกรอกรหัส 6 หลัก
                ที่ส่งไปยังหมายเลขโทรศัพท์มือถือของท่าน (XXXXXX5566)
              </p>
            </div>
            <div class="text-center">
              <div class="my-4 flex h-16 items-center justify-between gap-x-3">
                <input
                  type="text"
                  class="opd-form-input-otp active"
                  maxlength="1"
                  value="1"
                />
                <input
                  type="text"
                  class="opd-form-input-otp active"
                  maxlength="1"
                  value="0"
                />
                <input
                  type="text"
                  class="opd-form-input-otp active"
                  maxlength="1"
                  value="6"
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
              </div>
              <p class="mb-2">
                เวลาที่เหลืออยู่ <span class="text-green">03:58</span> นาที
              </p>
              <p>
                ไม่ได้รับ OTP?
                <a href="#" class="text-blue hover:underline">ส่งซ้ำ</a>
              </p>
            </div>
            <div class="mb-4">
              <button type="submit" class="opd-btn opd-btn-primary w-full">
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="opd-signup">
      <div class="mx-auto max-w-md w-full">
        <div class="opd-card">
          <form>
            <div class="text-center">
              <h1 class="mb-5">สร้างบัญชีโอเพ่นดูเรียนใหม่</h1>
              <h4>ยืนยัน SMS-OTP</h4>
              <p>
                เพื่อเพิ่มความปลอดภัย ต้องใช้ SMS One-time Password (OTP)
                เพื่อยืนยันตัวตน โปรดกรอกรหัส 6 หลัก
                ที่ส่งไปยังหมายเลขโทรศัพท์มือถือของท่าน (XXXXXX5566)
              </p>
            </div>
            <div class="text-center">
              <div class="my-4 flex h-16 items-center justify-between gap-x-3">
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
                <input
                  type="text"
                  class="opd-form-input-otp"
                  maxlength="1"
                  value=""
                />
              </div>
              <p>
                ไม่ได้รับ OTP?
                <a href="#" class="text-blue hover:underline">ส่งซ้ำ</a>
              </p>
            </div>
            <div class="mb-4">
              <button type="submit" class="opd-btn opd-btn-primary w-full">
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="opd-signup">
      <div class="mx-auto max-w-md w-full">
        <div class="opd-card">
          <form>
            <div class="text-center">
              <h1 class="mb-5">สร้างบัญชีโอเพ่นดูเรียนใหม่</h1>
              <h4>ตั้งหรัสผ่านใหม่</h4>
            </div>
            <div>
              <div class="my-4">
                <label class="opd-form-label after:content-['*']"
                  >รหัสผ่าน</label
                >
                <div class="mt-2">
                  <input
                    name="password"
                    type="password"
                    class="opd-form-input"
                    maxlength="8"
                    value=""
                    placeholder="รหัสผ่านของคุณ"
                  />
                </div>
              </div>
              <div class="my-4">
                <label class="opd-form-label after:content-['*']"
                  >ยืนยันรหัสผ่าน</label
                >
                <div class="mt-2">
                  <input
                    name="password"
                    type="password"
                    class="opd-form-input"
                    maxlength="8"
                    value=""
                    placeholder="รหัสผ่านของคุณ"
                  />
                </div>
              </div>
            </div>
            <div class="mb-4">
              <button type="submit" class="opd-btn opd-btn-primary w-full">
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <footer class="opd-footer">
      <div class="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4">
        <p class="copy-right">
          สงวนลิขสิทธิ์โดย บริษัท โอเพ่นดูเรียน จำกัด 2023 ©︎ OpenDurian Co.,
          Ltd.
        </p>
      </div>
    </footer>
  </div>
</template>
