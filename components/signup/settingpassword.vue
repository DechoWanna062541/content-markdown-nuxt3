<template>
    <div class="opd-signup">
        <div class="mx-auto max-w-md w-full">
            <div class="opd-card">
                <div class="pb-4 opd-logo-register">
                    <img class="mx-auto" src="OPD-logo.svg" alt="open durian" />
                </div>
                <form>
                    <div class="text-center">
                        <h1 class="mb-5">สร้างบัญชีโอเพ่นดูเรียนใหม่</h1>
                        <h4>ตั้งหรัสผ่านใหม่</h4>
                    </div>
                    <div>
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">รหัสผ่าน</label>
                            <div class="mt-2 relative">
                                <input name="password" type="password" class="opd-form-input" maxlength="8" value="" placeholder="รหัสผ่านของคุณ" />
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 opd-form-input-icon">
                                        <path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clip-rule="evenodd" />
                                        <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="my-4">
                            <label class="opd-form-label after:content-['*']">ยืนยันรหัสผ่าน</label>
                            <div class="mt-2 relative">
                                <input name="password" type="password" class="opd-form-input" maxlength="8" value="" placeholder="รหัสผ่านของคุณ" />
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 opd-form-input-icon">
                                        <path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clip-rule="evenodd" />
                                        <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                                    </svg>
                                </a>
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
</template>