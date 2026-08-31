/* =========================================================
   HAYA PORTFOLIO JAVASCRIPT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loading");
    /* =====================================================
       LOADING 0 - 100
    ====================================================== */
    const intro =
        document.getElementById("intro");
    const number =
        document.getElementById("loading-number");
    const bar =
        document.getElementById("loading-bar");
    const statement1 =
        document.querySelector(".intro-text-1");
    const statement2 =
        document.querySelector(".intro-text-2");
    let progress = 0;

    const loading =
        setInterval(() => {
            progress +=
                Math.floor(Math.random() * 6) + 1;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loading);
                setTimeout(() => {
                    statement1.classList.add("show");
                }, 400);
                setTimeout(() => {
                    statement2.classList.add("show");
                }, 3000);
                setTimeout(() => {
                    intro.classList.add("hide");
                    document.body.classList.remove("loading");
                }, 5600);
            }
            number.textContent =
                progress;
            bar.style.width =
                progress + "%";
        }, 60);
    /* =====================================================
       MOBILE NAVBAR
    ====================================================== */
    const menuButton =
        document.querySelector(".menu-button");
    const navMenu =
        document.querySelector(".nav-menu");
    menuButton.addEventListener(
        "click",
        () => {
            navMenu.classList.toggle("open");
        }
    );
    document.querySelectorAll(
        ".nav-menu a"
    ).forEach(link => {
        link.addEventListener(
            "click",
            () => {
                navMenu.classList.remove(
                    "open"
                );
            }
        );
    });
    /* =====================================================
       NAVBAR ACTIVE UNDERLINE
    ====================================================== */
    const sections =
        document.querySelectorAll(
            "main section[id]"
        );
    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );
    const navObserver =
        new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (
                        entry.isIntersecting
                    ) {
                        navLinks.forEach(link => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute(
                                    "href"
                                ) ===
                                "#" +
                                entry.target.id
                            );
                        });
                    }
                });
            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );

    sections.forEach(section => {
        navObserver.observe(section);
    });

    /* ====================================================
       SCROLL REVEAL
    ====================================================== */
    const revealObserver =
        new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (
                        entry.isIntersecting
                    ) {
                        entry.target.classList.add(
                            "show"
                        );
                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: .12
            }
        );
    document
        .querySelectorAll(
            ".hero-card, .about-card, .works-container, .achievement-card, .contact-card"
        )
        .forEach(element => {
            revealObserver.observe(element);
        });

    /* =====================================================
       DRAG NAME TAG
    ====================================================== */

    const tag =
        document.getElementById(
            "nameTag"
        );
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let originalX = 0;
    let originalY = 0;
    tag.addEventListener(
        "pointerdown",
        event => {
            dragging = true;
            tag.classList.add(
                "dragging"
            );
            tag.setPointerCapture(
                event.pointerId
            );
            startX =
                event.clientX;
            startY =
                event.clientY;
            originalX =
                tag.offsetLeft;
            originalY =
                tag.offsetTop;
        }
    );
    tag.addEventListener(
        "pointermove",
        event => {
            if (!dragging)
                return;
            const moveX =
                event.clientX -
                startX;
            const moveY =
                event.clientY -
                startY;
            tag.style.left =
                originalX +
                moveX +
                "px";
            tag.style.top =
                originalY +
                moveY +
                "px";
        }
    );
    function stopDragging() {
        dragging = false;
        tag.classList.remove(
            "dragging"
        );
    }
    tag.addEventListener(
        "pointerup",
        stopDragging
    );
    tag.addEventListener(
        "pointercancel",
        stopDragging
    );
    /* =====================================================
       JOURNEY SLIDER
    ====================================================== */
    const journeys = [
        {
            category: "OSIS",
            title:
                "Belajar berorganisasi dan bekerja dalam tim.",

            description:
                "Pengalaman mengikuti organisasi membantu saya belajar komunikasi, tanggung jawab, teamwork, dan keberanian mengambil peran.",

            image:
                "assets/journey-1.jpg"
        },

        {
            category: "PIK-R",
            title:
                "Belajar memimpin dan mengelola program.",

            description:
                "Kegiatan organisasi membuat saya belajar menyusun program, berkoordinasi dengan anggota, dan mengambil keputusan.",

            image:
                "assets/journey-2.jpg"
        },

        {
            category: "PPLG",
            title:
                "Menggabungkan desain dengan teknologi.",
            description:
                "Saya mulai menggabungkan ketertarikan pada desain dengan kemampuan membuat website menggunakan teknologi web.",
            image:
                "assets/journey-3.jpg"
        }
    ];

    let journeyIndex = 0;
    const journeyImage =
        document.getElementById(
            "journey-image"
        );
    const journeyCategory =
        document.getElementById(
            "journey-category"
        );
    const journeyTitle =
        document.getElementById(
            "journey-title"
        );
    const journeyDescription =
        document.getElementById(
            "journey-description"
        );
    const journeyCounter =
        document.getElementById(
            "journey-counter"
        );
    document
        .getElementById(
            "journey-next"
        )
        .addEventListener(
            "click",
            () => {
                journeyIndex++;
                if (
                    journeyIndex >=
                    journeys.length
                ) {
                    journeyIndex = 0;
                }
                const data =
                    journeys[journeyIndex];
                journeyImage.style.opacity =
                    "0";
                journeyImage.style.transform =
                    "translateX(15px)";
                setTimeout(() => {
                    journeyImage.src =
                        data.image;
                    journeyCategory.textContent =
                        data.category;
                    journeyTitle.textContent =
                        data.title;
                    journeyDescription.textContent =
                        data.description;
                    journeyCounter.textContent =
                        "0" +
                        (journeyIndex + 1) +
                        " / 03";
                    journeyImage.style.opacity =
                        "1";
                    journeyImage.style.transform =
                        "translateX(0)";
                }, 200);
            }
        );
    /* =====================================================
       SELECTED WORKS
    ====================================================== */
    const works = [
        {
            category:
                "GRAPHIC DESIGN",
            title:
                "Visual Project",
            description:
                "Eksplorasi visual, warna, tipografi, dan komposisi.",
            image:
                "assets/work-1.jpg"
        },
        {
            category:
                "UI/UX DESIGN",
            title:
                "Interface Concept",
            description:
                "Membuat interface yang sederhana, jelas, dan tetap memiliki karakter.",
            image:
                "assets/work-2.jpg"
        },


        {
            category:
                "WEB DEVELOPMENT",
            title:
                "Interactive Website",
            description:
                "Mengubah desain menjadi website interaktif menggunakan HTML, CSS, dan JavaScript.",
            image:
                "assets/work-3.jpg"
        }
    ];
    let workIndex = 0;
    const workImage =
        document.getElementById(
            "work-image"
        );
    const workCategory =
        document.getElementById(
            "work-category"
        );
    const workTitle =
        document.getElementById(
            "work-title"
        );
    const workDescription =
        document.getElementById(
            "work-description"
        );
    const workTabs =
        document.querySelectorAll(
            ".work-tab"
        );
    const dots =
        document.getElementById(
            "work-dots"
        );
    /* CREATE DOT */

    works.forEach(
        (_, index) => {
            const dot =
                document.createElement(
                    "span"
                );
            dot.classList.add(
                "work-dot"
            );
            if (index === 0) {
                dot.classList.add(
                    "active"
                );
            }
            dots.appendChild(dot);
        }
    );


    function updateWork(index) {
        workIndex =
            (index + works.length) %
            works.length;
        const data =
            works[workIndex];
        workImage.style.opacity =
            "0";
        workImage.style.transform =
            "scale(.96)";
        setTimeout(() => {
            workImage.src =
                data.image;
            workCategory.textContent =
                data.category;
            workTitle.textContent =
                data.title;
            workDescription.textContent =
                data.description;
            workTabs.forEach(
                (tab, i) => {
                    tab.classList.toggle(
                        "active",
                        i === workIndex
                    );
                }
            );
            document
                .querySelectorAll(
                    ".work-dot"
                )
                .forEach(
                    (dot, i) => {
                        dot.classList.toggle(
                            "active",
                            i === workIndex
                        );
                    }
                );
            workImage.style.opacity =
                "1";
            workImage.style.transform =
                "scale(1)";
        }, 200);
    }
    workTabs.forEach(
        (tab, index) => {
            tab.addEventListener(
                "click",
                () => {
                    updateWork(index);
                }
            );
        }
    );

    document
        .getElementById(
            "work-prev"
        )
        .addEventListener(
            "click",
            () => {
                updateWork(
                    workIndex - 1
                );
            }
        );

    document
        .getElementById(
            "work-next"
        )
        .addEventListener(
            "click",
            () => {
                updateWork(
                    workIndex + 1
                );
            }
        );
    /* =====================================================
       ACHIEVEMENTS
    ====================================================== */
    const achievements = [
        {
            image:
                "assets/achievement-1.jpg",
            label:
                "SELECTED MOMENT.",
            description:
                "Pengalaman mengikuti kegiatan dan kompetisi mengajarkan saya tentang teamwork, konsistensi, dan keberanian untuk berkembang.",
            quote:
                "Mulai sekarang, make it happen."
        },

        {
            image:
                "assets/achievement-2.jpg",
            label:
                "TEAMWORK.",
            description:
                "Bekerja bersama orang lain mengajarkan saya bahwa hasil yang baik lahir dari komunikasi dan saling mendukung.",
            quote:
                "Grow together, go further."
        },

        {
            image:
                "assets/achievement-3.jpg",
            label:
                "KEEP CREATING.",
            description:
                "Setiap project menjadi kesempatan untuk mencoba sesuatu yang baru dan terus berkembang.",
            quote:
                "Create. Learn. Repeat."
        }

    ];

    let achievementIndex = 0;
    const achievementImage =
        document.getElementById(
            "achievement-image"
        );
    const achievementLabel =
        document.getElementById(
            "achievement-label"
        );
    const achievementDescription =
        document.getElementById(
            "achievement-description"
        );
    const achievementQuote =
        document.getElementById(
            "achievement-quote"
        );
    document
        .getElementById(
            "achievement-next"
        )
        .addEventListener(
            "click",
            () => {
                achievementIndex++;
                if (
                    achievementIndex >=
                    achievements.length
                ) {
                    achievementIndex = 0;
                }
                const data =
                    achievements[
                        achievementIndex
                    ];
                achievementImage.style.opacity =
                    "0";
                setTimeout(() => {
                    achievementImage.src =
                        data.image;
                    achievementLabel.textContent =
                        data.label;
                    achievementDescription.textContent =
                        data.description;
                    achievementQuote.textContent =
                        data.quote;
                    achievementImage.style.opacity =
                        "1";
                }, 200);
            }
        );
    /* =====================================================
       MOUSE PARALLAX ORNAMENT
    ====================================================== */
    window.addEventListener(
        "pointermove",
        event => {
            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                ) * 2;
            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                ) * 2;
            document
                .querySelectorAll(
                    ".floating-elements span"
                )
                .forEach(
                    (element, index) => {
                        const depth =
                            (index + 1) * 2;
                        element.style.marginLeft =
                            x * depth +
                            "px";
                        element.style.marginTop =
                            y * depth +
                            "px";

                    }
                );

        }
    );

});

/* =========================================
   FLOATING ORNAMENT
========================================= */

const decorationContainer =
    document.querySelector(".floating-decoration");


const ornamentSymbols = [
    "✦",
    "✧",
    "•",
    "✦",
    "✧",
    "•"
];


const ornamentColors = [
    "#F7C8D3", // Blush Petal
    "#B46A72", // Rosewood
    "#A8B58A", // Sage Leaf
    "#A9B7C6"  // Misty Sky
];


function createOrnament() {

    const ornament =
        document.createElement("span");


    ornament.classList.add("js-ornament");


    /* Random bentuk */
    ornament.innerHTML =
        ornamentSymbols[
            Math.floor(
                Math.random() *
                ornamentSymbols.length
            )
        ];


    /* Random posisi */
    ornament.style.left =
        Math.random() * 100 + "vw";

    ornament.style.top =
        Math.random() * 100 + "vh";


    /* Random ukuran */
    const size =
        Math.random() * 14 + 8;

    ornament.style.fontSize =
        size + "px";


    /* Random warna */
    ornament.style.color =
        ornamentColors[
            Math.floor(
                Math.random() *
                ornamentColors.length
            )
        ];


    /* Random durasi */
    const duration =
        Math.random() * 8 + 8;

    ornament.style.animationDuration =
        duration + "s";


    /* Random delay */
    ornament.style.animationDelay =
        Math.random() * -10 + "s";


    decorationContainer.appendChild(
        ornament
    );
}


/* Buat 25 ornamen */
for (let i = 0; i < 25; i++) {

    createOrnament();

}