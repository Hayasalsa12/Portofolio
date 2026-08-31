document.addEventListener("DOMContentLoaded", () => {

    setupIntro();
    createOrnaments();
    setupDraggableCard();
    setupJourney();
    setupWorks();
    setupAchievements();
    setupNavigation();
    setupScrollAnimations();

});


/* =========================================================
   INTRO
========================================================= */

function setupIntro() {

    const intro =
        document.getElementById("intro");

    const statementScreen =
        document.getElementById("statement-screen");

    const statementText =
        document.getElementById("statement-text");

    const website =
        document.getElementById("website");

    const loadingNumber =
        document.getElementById("loading-number");

    const loadingBar =
        document.getElementById("loading-bar");


    let progress = 0;


    document.body.classList.add("locked");


    const loading = setInterval(() => {

        progress++;

        loadingNumber.textContent =
            `${progress}%`;

        loadingBar.style.width =
            `${progress}%`;


        if (progress >= 100) {

            clearInterval(loading);

            intro.style.transition =
                "opacity .8s ease";

            intro.style.opacity = "0";


            setTimeout(() => {

                intro.style.display =
                    "none";

                showStatement();

            }, 800);

        }

    }, 25);


    function showStatement() {

        statementScreen.style.display =
            "flex";

        statementScreen.style.opacity =
            "0";


        setTimeout(() => {

            statementScreen.style.opacity =
                "1";

        }, 100);


        setTimeout(() => {

            statementScreen.style.opacity =
                "0";


            setTimeout(() => {

                statementText.textContent =
                    "DESIGN. CREATE. DEVELOP.";

                statementScreen.style.opacity =
                    "1";


                setTimeout(() => {

                    statementScreen.style.opacity =
                        "0";


                    setTimeout(() => {

                        statementScreen.style.display =
                            "none";

                        website.style.visibility =
                            "visible";

                        website.style.transition =
                            "opacity 1s ease";

                        website.style.opacity =
                            "1";

                        document.body.classList.remove(
                            "locked"
                        );

                    }, 800);

                }, 1800);

            }, 800);

        }, 1800);

    }

}


/* =========================================================
   FLOATING ORNAMENTS
========================================================= */

function createOrnaments() {

    const container =
        document.getElementById(
            "floating-decoration"
        );


    const types = [
        "circle",
        "square",
        "star"
    ];


    const colors = [
        "#f7c8d3",
        "#a8b58a",
        "#b46a72",
        "#a9b7c6"
    ];


    for (let i = 0; i < 32; i++) {

        const ornament =
            document.createElement("span");


        const type =
            types[
                Math.floor(
                    Math.random() * types.length
                )
            ];


        ornament.className =
            `ornament ${type}`;


        if (type === "star") {

            ornament.textContent =
                "✦";

        }


        ornament.style.left =
            `${Math.random() * 100}%`;

        ornament.style.top =
            `${Math.random() * 100}%`;


        const color =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        ornament.style.color =
            color;


        if (type !== "star") {

            ornament.style.background =
                color;

        }


        ornament.style.setProperty(
            "--duration",
            `${7 + Math.random() * 8}s`
        );


        ornament.style.setProperty(
            "--delay",
            `${Math.random() * -10}s`
        );


        ornament.style.transform =
            `scale(${0.6 + Math.random() * 0.8})`;


        container.appendChild(
            ornament
        );

    }

}


/* =========================================================
   DRAGGABLE POLAROID
========================================================= */

function setupDraggableCard() {

    const card =
        document.getElementById("id-card");

    const wrap =
        document.querySelector(".id-card-wrap");


    if (!card || !wrap) {
        return;
    }


    let isDragging = false;

    let startX = 0;
    let startY = 0;

    let currentX = 0;
    let currentY = 0;


    function startDrag(event) {

        isDragging = true;


        const point =
            event.touches
                ? event.touches[0]
                : event;


        startX =
            point.clientX - currentX;

        startY =
            point.clientY - currentY;


        card.style.transition =
            "none";

    }


    function drag(event) {

        if (!isDragging) {
            return;
        }


        const point =
            event.touches
                ? event.touches[0]
                : event;


        currentX =
            point.clientX - startX;

        currentY =
            point.clientY - startY;


        currentX =
            Math.max(
                -100,
                Math.min(100, currentX)
            );


        currentY =
            Math.max(
                -80,
                Math.min(80, currentY)
            );


        const rotation =
            currentX * -0.035 - 6;


        wrap.style.transform =
            `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;

    }


    function endDrag() {

        if (!isDragging) {
            return;
        }


        isDragging = false;


        wrap.style.transition =
            "transform .8s cubic-bezier(.2,.8,.2,1)";


        wrap.style.transform =
            "translate(0, 0) rotate(-6deg)";


        currentX = 0;
        currentY = 0;


        setTimeout(() => {

            wrap.style.transition =
                "";

        }, 800);

    }


    card.addEventListener(
        "mousedown",
        startDrag
    );

    window.addEventListener(
        "mousemove",
        drag
    );

    window.addEventListener(
        "mouseup",
        endDrag
    );


    card.addEventListener(
        "touchstart",
        startDrag,
        { passive: true }
    );

    window.addEventListener(
        "touchmove",
        drag,
        { passive: true }
    );

    window.addEventListener(
        "touchend",
        endDrag
    );

}


/* =========================================================
   JOURNEY
========================================================= */

function setupJourney() {

    const image =
        document.getElementById(
            "journey-img"
        );

    const title =
        document.getElementById(
            "journey-title"
        );

    const text =
        document.getElementById(
            "journey-text"
        );

    const number =
        document.getElementById(
            "journey-number"
        );

    const button =
        document.getElementById(
            "journey-next"
        );


    if (!image || !button) {
        return;
    }


    const journeys = [

        {
            image: "assets/journey-1.jpg",

            title: "OSIS",

            text:
                "Pengalaman mengikuti Organisasi Siswa Intra Sekolah membuat saya belajar menjalankan program kerja, bertanggung jawab terhadap tugas, berkomunikasi dengan banyak orang, public speaking, disiplin, dan bekerja dalam sebuah tim."
        },

        {
            image: "assets/journey-2.jpg",

            title: "DESIGN",

            text:
                "Saya mulai mengeksplorasi dunia desain melalui berbagai project sekolah dan personal. Dari proses ini saya belajar bagaimana sebuah ide dapat diterjemahkan menjadi visual yang memiliki konsep, struktur, dan karakter."
        },

        {
            image: "assets/journey-3.jpg",

            title: "DEVELOPMENT",

            text:
                "Ketertarikan terhadap teknologi membawa saya mempelajari HTML, CSS, JavaScript, PHP, dan pengembangan website. Saya menikmati proses mengubah desain menjadi halaman website yang dapat digunakan."
        }

    ];


    let index = 0;


    function updateJourney(
        newIndex
    ) {

        index =
            (newIndex + journeys.length)
            % journeys.length;


        image.style.opacity =
            "0";


        setTimeout(() => {

            image.src =
                journeys[index].image;

            title.textContent =
                journeys[index].title;

            text.textContent =
                journeys[index].text;

            number.textContent =
                `0${index + 1} / 0${journeys.length}`;


            image.style.opacity =
                "1";

        }, 250);

    }


    button.addEventListener(
        "click",
        () => {

            updateJourney(
                index + 1
            );

        }
    );

}


/* =========================================================
   WORKS
========================================================= */

function setupWorks() {

    const phoneImage =
        document.getElementById(
            "phone-img"
        );

    const workImage =
        document.getElementById(
            "work-image"
        );

    const workTitle =
        document.getElementById(
            "work-title"
        );

    const workDescription =
        document.getElementById(
            "work-description"
        );

    const workNumber =
        document.getElementById(
            "work-number"
        );

    const tabs =
        document.querySelectorAll(
            ".work-tab"
        );

    const prev =
        document.getElementById(
            "work-prev"
        );

    const next =
        document.getElementById(
            "work-next"
        );


    if (!workImage) {
        return;
    }


    const works = [

        {
            image:
                "assets/work-poster.jpg",

            title:
                "POSTER DESIGN",

            description:
                "Eksplorasi desain visual dengan pendekatan sederhana, modern, dan komunikatif. Fokus pada komposisi, tipografi, warna, dan penyampaian pesan."
        },

        {
            image:
                "assets/work-website.jpg",

            title:
                "WEB DESIGN",

            description:
                "Perancangan website dengan fokus pada visual, struktur informasi, konsistensi layout, dan pengalaman pengguna agar sebuah website terasa lebih hidup."
        },

        {
            image:
                "assets/work-ui.jpg",

            title:
                "UI/UX DEVELOPMENT",

            description:
                "Menggabungkan desain antarmuka dengan pengembangan website menggunakan HTML, CSS, dan JavaScript untuk menciptakan tampilan yang menarik sekaligus interaktif."
        }

    ];


    let index = 0;


    function updateWork(
        newIndex
    ) {

        index =
            (newIndex + works.length)
            % works.length;


        workImage.style.opacity =
            "0";

        if (phoneImage) {

            phoneImage.style.opacity =
                "0";

        }


        setTimeout(() => {

            workImage.src =
                works[index].image;

            if (phoneImage) {

                phoneImage.src =
                    works[index].image;

            }


            workTitle.textContent =
                works[index].title;

            workDescription.textContent =
                works[index].description;


            workNumber.textContent =
                `0${index + 1} / 0${works.length}`;


            tabs.forEach(
                (tab, tabIndex) => {

                    tab.classList.toggle(
                        "active",
                        tabIndex === index
                    );

                }
            );


            workImage.style.opacity =
                "1";

            if (phoneImage) {

                phoneImage.style.opacity =
                    "1";

            }

        }, 220);

    }


    tabs.forEach(
        (tab, tabIndex) => {

            tab.addEventListener(
                "click",
                () => {

                    updateWork(
                        tabIndex
                    );

                }
            );

        }
    );


    prev.addEventListener(
        "click",
        () => {

            updateWork(
                index - 1
            );

        }
    );


    next.addEventListener(
        "click",
        () => {

            updateWork(
                index + 1
            );

        }
    );

}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function setupAchievements() {

    const image =
        document.getElementById(
            "achievement-img"
        );

    const overlayTitle =
        document.getElementById(
            "achievement-overlay-title"
        );

    const overlayText =
        document.getElementById(
            "achievement-overlay-text"
        );

    const message =
        document.getElementById(
            "achievement-message"
        );

    const number =
        document.getElementById(
            "achievement-number"
        );

    const prev =
        document.getElementById(
            "achievement-prev"
        );

    const next =
        document.getElementById(
            "achievement-next"
        );

    const changeButton =
        document.getElementById(
            "achievement-change"
        );


    if (!image) {
        return;
    }


    const achievements = [

        {
            image:
                "assets/achievement-1.jpg",

            title:
                "GROWING THROUGH EXPERIENCE",

            overlay:
                "Pengalaman mengikuti kegiatan dan bekerja bersama tim mengajarkan saya arti komunikasi, tanggung jawab, kerja sama, dan bagaimana menyelesaikan sebuah tugas bersama.",

            message:
                "\"Setiap pengalaman adalah bagian dari proses untuk menjadi lebih baik.\""
        },

        {
            image:
                "assets/achievement-2.jpg",

            title:
                "BRAVE TO CREATE",

            overlay:
                "Berani mencoba sesuatu yang baru membuat saya menemukan kemampuan yang sebelumnya belum saya sadari. Proses mencoba juga mengajarkan saya untuk tidak takut melakukan kesalahan.",

            message:
                "\"Jangan takut memulai. Tidak harus sempurna untuk menjadi berarti.\""
        },

        {
            image:
                "assets/achievement-3.jpg",

            title:
                "KEEP MOVING FORWARD",

            overlay:
                "Sebuah pencapaian bukan hanya tentang hasil, tetapi juga proses panjang di baliknya. Setiap langkah kecil membantu saya tumbuh dan mengenal kemampuan diri sendiri.",

            message:
                "\"Keep creating. Keep learning. Keep growing.\""
        }

    ];


    let index = 0;


    function updateAchievement(
        newIndex
    ) {

        index =
            (newIndex + achievements.length)
            % achievements.length;


        image.style.opacity =
            "0";


        setTimeout(() => {

            image.src =
                achievements[index].image;

            overlayTitle.textContent =
                achievements[index].title;

            overlayText.textContent =
                achievements[index].overlay;

            message.textContent =
                achievements[index].message;


            number.textContent =
                `0${index + 1} / 0${achievements.length}`;


            image.style.opacity =
                "1";

        }, 250);

    }


    /* panah kiri */

    prev.addEventListener(
        "click",
        () => {

            updateAchievement(
                index - 1
            );

        }
    );


    /* panah kanan */

    next.addEventListener(
        "click",
        () => {

            updateAchievement(
                index + 1
            );

        }
    );


    /* =====================================================
       PANAH HIJAU CTA

       INI YANG KAMU MAKSUD:
       ketika diklik, FOTO + TEKS achievement
       berubah.
    ====================================================== */

    changeButton.addEventListener(
        "click",
        () => {

            updateAchievement(
                index + 1
            );

        }
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            ".nav-link"
        );

    const sections =
        document.querySelectorAll(
            ".section"
        );


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const target =
                        document.querySelector(
                            link.getAttribute("href")
                        );


                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            links.forEach(
                                link => {

                                    link.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            const active =
                                document.querySelector(
                                    `.nav-link[href="#${entry.target.id}"]`
                                );


                            if (active) {

                                active.classList.add(
                                    "active"
                                );

                            }

                        }

                    }
                );

            },
            {
                threshold: 0.3
            }
        );


    sections.forEach(
        section => {

            observer.observe(
                section
            );

        }
    );

}


/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function setupScrollAnimations() {

    const elements =
        document.querySelectorAll(
            ".about-card, .work-preview, .achievement-content, .contact-card"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element => {

            element.classList.add(
                "scroll-hidden"
            );

            observer.observe(
                element
            );

        }
    );

}