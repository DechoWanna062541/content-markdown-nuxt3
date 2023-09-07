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
                        <h4>ยืนยัน SMS-OTP</h4>
                        <p>เพื่อเพิ่มความปลอดภัย ต้องใช้ SMS One-time Password (OTP) เพื่อยืนยันตัวตน โปรดกรอกรหัส 6 หลัก
                            ที่ส่งไปยังหมายเลขโทรศัพท์มือถือของท่าน (XXXXXX5566)</p>
                    </div>
                    <div class="text-center">
                        <div class="my-4 flex h-16 items-center justify-between gap-x-3">
                            <input type="text" class="opd-form-input-otp active" maxlength="1" value="1" />
                            <input type="text" class="opd-form-input-otp active" maxlength="1" value="0" />
                            <input type="text" class="opd-form-input-otp active" maxlength="1" value="6" />
                            <input type="text" class="opd-form-input-otp" maxlength="1" value="" />
                            <input type="text" class="opd-form-input-otp" maxlength="1" value="" />
                            <input type="text" class="opd-form-input-otp" maxlength="1" value="" />
                        </div>
                        <p class="mb-2">เวลาที่เหลืออยู่ <span class="text-green">03:58</span> นาที</p>
                        <p>ไม่ได้รับ OTP? <a href="#" class="text-blue hover:underline">ส่งซ้ำ</a></p>
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