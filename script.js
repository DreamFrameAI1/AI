document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const inputs = document.querySelectorAll("input");

    // เพิ่มเอฟเฟกต์เวลากดปุ่ม
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.style.boxShadow = "0 0 20px rgba(255, 0, 255, 0.8)";
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", function () {
            button.style.boxShadow = "0 0 15px rgba(255, 0, 255, 0.5)";
            button.style.transform = "scale(1)";
        });
    });

    // เพิ่มเอฟเฟกต์ตอนโฟกัสที่ input
    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            input.style.boxShadow = "0 0 15px rgba(255, 0, 255, 0.8)";
        });
        input.addEventListener("blur", function () {
            input.style.boxShadow = "0 0 10px rgba(255, 0, 255, 0.5)";
        });
    });

    // แสดงข้อความแจ้งเตือนเมื่อล็อกอิน (ตัวอย่าง)
    const loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("เข้าสู่ระบบสำเร็จ!");
        });
    }

    // แสดงข้อความแจ้งเตือนเมื่อลงทะเบียน (ตัวอย่าง)
    const registerForm = document.querySelector("#registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("สมัครสมาชิกสำเร็จ!");
        });
    }
});
