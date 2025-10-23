document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navLinks1 = document.getElementById('nav-links1');
            const navLinks2 = document.getElementById('nav-links2');
            
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks1.classList.toggle('active');
                navLinks2.classList.toggle('active');
            });
            
            // Fechar menu ao clicar em um link (em dispositivos móveis)
            const navItems = document.querySelectorAll('.nav-links a');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        hamburger.classList.remove('active');
                        navLinks1.classList.remove('active');
                        navLinks2.classList.remove('active');
                    }
                });
            });
        });

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 5000);
});

window.localStorage.clear()