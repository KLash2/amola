document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const splashText = document.querySelector('.splash-text');
    const text = 'بـــحــــــــبـــــــــــك';
    let delay = 0;

    // إضافة كل حرف مع تأخير
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${delay}s`;
        splashText.appendChild(span);
        delay += 0.2;
    });

    // إخفاء شاشة البداية بعد انتهاء الرسالة
    setTimeout(() => {
        splashScreen.classList.add('hide');
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1000);
    }, (delay + 1) * 1000);
});