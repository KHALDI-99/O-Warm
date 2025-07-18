// Preloader
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1500);
        });

        // Video background
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('.video-bg');
            setTimeout(() => {
                video.classList.add('active');
            }, 2000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Menu tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        const menuTabs = {
            entrees: document.getElementById('entrees-tab'),
            plats: document.getElementById('plats-tab'),
            desserts: document.getElementById('desserts-tab'),
            vins: document.getElementById('vins-tab')
        };

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all menu grids
                Object.values(menuTabs).forEach(tab => {
                    tab.style.display = 'none';
                });
                
                // Show selected menu grid
                const tabName = this.getAttribute('data-tab');
                menuTabs[tabName].style.display = 'grid';
                
                // Animate menu items
                const menuItems = menuTabs[tabName].querySelectorAll('.menu-item');
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 100);
                });
            });
        });

        // Animate first tab items on load
        window.addEventListener('load', function() {
            const firstTabItems = document.querySelectorAll('#entrees-tab .menu-item');
            firstTabItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100);
            });
        });

        // Testimonial slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const sliderDots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;

        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            sliderDots.forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            sliderDots[index].classList.add('active');
            currentSlide = index;
        }

        sliderDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                showSlide(slideIndex);
            });
        });

        // Auto slide change
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);

        // Form submission
        const reservationForm = document.querySelector('.reservation-form');
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('#name').value;
            const date = this.querySelector('#date').value;
            
            // Here you would normally send the data to a server
            alert(`Merci ${name} pour votre réservation le ${date}. Nous vous avons envoyé une confirmation par email.`);
            
            // Reset the form
            this.reset();
        });

        // Newsletter form
        const newsletterForms = document.querySelectorAll('.newsletter-form');
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                alert(`Merci pour votre inscription avec l'email ${email}.`);
                this.reset();
            });
        });

        // Gallery auto-scroll
        const galleryContainer = document.querySelector('.gallery-container');
        let scrollPosition = 0;
        const galleryItems = document.querySelectorAll('.gallery-item');
        const itemWidth = galleryItems[0].offsetWidth + 30; // width + margin

        function scrollGallery() {
            scrollPosition += 1;
            if (scrollPosition >= itemWidth * galleryItems.length / 3) {
                scrollPosition = 0;
            }
            galleryContainer.style.transform = `translateX(-${scrollPosition}px)`;
            requestAnimationFrame(scrollGallery);
        }

        // Start scrolling after page loads
        setTimeout(() => {
            requestAnimationFrame(scrollGallery);
        }, 3000);


// Script fonctionnel pour menu mobile responsive
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Optionnel : fermer le menu après avoir cliqué sur un lien
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});
