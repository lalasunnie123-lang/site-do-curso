document.addEventListener("DOMContentLoaded", function() {
    const root = document.documentElement;
    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");
    const toggleContrastBtn = document.getElementById("toggle-contrast");
    const body = document.body;
    const liveRegion = document.querySelector('[aria-live="polite"]');

    let currentFontSize = 1;

    increaseFontBtn.addEventListener("click", () => {
        if (currentFontSize < 1.4) {
            currentFontSize += 0.1;
            root.style.setProperty('--base-font-size', currentFontSize);
        }
    });

    decreaseFontBtn.addEventListener("click", () => {
        if (currentFontSize > 0.7) {
            currentFontSize -= 0.1;
            root.style.setProperty('--base-font-size', currentFontSize);
        }
    });

    toggleContrastBtn.addEventListener("click", () => {
        body.classList.toggle("high-contrast");
        if (body.classList.contains("high-contrast")) {
            liveRegion.textContent = "Modo de alto contraste ativado.";
        } else {
            liveRegion.textContent = "Modo de alto contraste desativado.";
        }
    });

    const sr = ScrollReveal({
        distance: '50px',
        duration: 1500,
        easing: 'ease-in-out',
        reset: false
    });

    sr.reveal('.lead, .display-4, .img-fluid, h2', {
        origin: 'top',
        interval: 100
    });

    sr.reveal('.card', {
        origin: 'bottom',
        interval: 200
    });

    sr.reveal('.gallery-img', {
        origin: 'bottom',
        interval: 150
    });

    sr.reveal('blockquote', {
        origin: 'left'
    });

    const keepOpenButtons = document.querySelectorAll('.keep-open');
    keepOpenButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    const galleryLinks = document.querySelectorAll('.gallery-link');
    const modalImage = document.getElementById('modalImage');

    galleryLinks.forEach(link => {
        link.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-bs-image');
            modalImage.src = imageUrl;
        });
    });
});
