document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    new Typed('.typing-text', {
        strings: [
            'Mahasiswa Universitas Singaperbangsa Karawang', 
            'Mahasiswa Sistem Informasi', 
            'NPM 2310631250045', 
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
    
    const sertifikasiCard = document.querySelector('.achievement-grid .clickable-achievement:nth-child(1)');
    const sertifikasiModal = document.getElementById('sertifikasi-modal');
    const closeSertifikasiModal = sertifikasiModal.querySelector('.close-modal');

    sertifikasiCard.addEventListener('click', () => {
        sertifikasiModal.style.display = 'block';
    });

    closeSertifikasiModal.addEventListener('click', () => {
        sertifikasiModal.style.display = 'none';
    });

    const lombaCard = document.querySelector('.achievement-grid .clickable-achievement:nth-child(2)');
    const lombaModal = document.getElementById('lomba-modal');
    const closeLombaModal = lombaModal.querySelector('.close-modal');

    lombaCard.addEventListener('click', () => {
        lombaModal.style.display = 'block';
    });

    closeLombaModal.addEventListener('click', () => {
        lombaModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === sertifikasiModal) {
            sertifikasiModal.style.display = 'none';
        }
        if (event.target === lombaModal) {
            lombaModal.style.display = 'none';
        }
    });
});
