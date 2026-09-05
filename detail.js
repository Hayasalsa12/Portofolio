/* =========================================================
   DETAIL PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOAD
    ===================================================== */

    const page = document.querySelector(".detail-page");

    setTimeout(() => {
        if (page) {
            page.classList.add("loaded");
        }
    }, 100);


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =====================================================
       BACK TO WORKS
    ===================================================== */

    const backButton = document.querySelector(".back-btn");

    if (backButton) {

        backButton.addEventListener("click", (event) => {

            event.preventDefault();

            /*
             * Kembali ke halaman sebelumnya.
             *
             * Jadi kalau halaman detail dibuka dari
             * bagian WORKS di portfolio, tombol BACK
             * akan kembali ke posisi sebelumnya.
             */

            if (window.history.length > 1) {

                window.history.back();

            } else {

                window.location.href = "index.html#works";

            }

        });

    }


    /* =====================================================
       IMAGE PARALLAX
    ===================================================== */

    const images = document.querySelectorAll(".detail-image img");

    window.addEventListener(
        "scroll",
        () => {

            images.forEach((image) => {

                const rect = image.getBoundingClientRect();

                const windowHeight = window.innerHeight;

                if (
                    rect.top < windowHeight &&
                    rect.bottom > 0
                ) {

                    const progress =
                        (windowHeight - rect.top) /
                        (windowHeight + rect.height);

                    const movement =
                        (progress - 0.5) * 12;

                    image.style.transform =
                        `scale(1.02) translateY(${movement}px)`;

                }

            });

        },
        {
            passive: true
        }
    );


    /* =====================================================
       SKILL CARD TILT
    ===================================================== */

    const cards =
        document.querySelectorAll(".detail-skill");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `translateY(-8px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0) rotateX(0) rotateY(0)";

        });

    });

});