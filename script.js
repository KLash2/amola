document.addEventListener('DOMContentLoaded', () => {
    createBackgroundHearts();
    document.addEventListener('click', (event) => {
        createClickHeart(event);
    });
    
    // إعداد الصوت
    const audio = document.getElementById('background-music');
    
    // تشغيل الموسيقى عند النقر
    document.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        }
    }, { once: true });
});

function createBackgroundHearts() {
    const heartsContainer = document.querySelector('.hearts-decoration');
    const numberOfHearts = 20;
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb6b6', '#ffd3d3'];

    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
                createBackgroundHeart();
            }, 6000);
        }, i * 300);
}

function createBackgroundHeart() {
    const heartsContainer = document.querySelector('.hearts-decoration');
    const heart = document.createElement('div');
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb6b6', '#ffd3d3'];
    
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 3 + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
        createBackgroundHeart();
    }, 6000);
}

function createClickHeart(event) {
    const heart = document.createElement('div');
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb6b6', '#ffd3d3'];
    
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = (event.clientX - 10) + 'px';
    heart.style.top = (event.clientY - 10) + 'px';
    heart.style.position = 'fixed';
    heart.style.animation = 'float 2s ease-in-out, pulse 1s ease-in-out';
    heart.style.opacity = '1';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    heart.style.fontSize = '2rem';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
}
};