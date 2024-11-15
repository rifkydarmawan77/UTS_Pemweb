document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('click', function () {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll untuk CTA Button (Kenali Saya Lebih Lanjut)
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('click', function () {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    });

    // Efek Animasi saat Scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left');
    
    function handleScrollAnimation() {
        const windowHeight = window.innerHeight;
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Memanggil fungsi saat halaman digulir
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Panggil langsung agar efek muncul jika elemen sudah terlihat saat pertama kali

    // Tombol Scroll to Top
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = '↑';
    scrollTopButton.classList.add('scroll-top-btn');
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Menampilkan tombol Scroll to Top hanya setelah menggulir ke bawah
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });
});
