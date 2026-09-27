// ==========================================
// PORTFOLIO SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // TYPING EFFECT
    // ==========================================

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [
            "Developer",
            "BTech Student",
            "Python Learner",
            "AI Enthusiast",
            "Problem Solver"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typing.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;
                }

            } else {

                typing.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 60 : 100
            );
        }

        typeEffect();
    }


    // ==========================================
    // DARK / LIGHT MODE
    // ==========================================

    const themeButton =
        document.getElementById("theme-toggle");

    if (themeButton) {

        const savedTheme =
            localStorage.getItem("portfolio-theme");

        if (savedTheme === "light") {

            document.body.classList.add("light");

            themeButton.textContent = "🌙";

        } else {

            themeButton.textContent = "☀️";

        }


        themeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle("light");

                if (
                    document.body.classList.contains("light")
                ) {

                    themeButton.textContent = "🌙";

                    localStorage.setItem(
                        "portfolio-theme",
                        "light"
                    );

                } else {

                    themeButton.textContent = "☀️";

                    localStorage.setItem(
                        "portfolio-theme",
                        "dark"
                    );
                }
            }
        );
    }


    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const revealElements =
        document.querySelectorAll(".reveal");

    function checkReveal() {

        revealElements.forEach(
            function (element) {

                const position =
                    element.getBoundingClientRect().top;

                const screenHeight =
                    window.innerHeight;

                if (
                    position <
                    screenHeight - 80
                ) {

                    element.classList.add("active");

                }
            }
        );
    }

    window.addEventListener(
        "scroll",
        checkReveal
    );

    checkReveal();


    // ==========================================
    // BACK TO TOP
    // ==========================================

    const backTop =
        document.getElementById("back-top");

    if (backTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backTop.classList.add("show");

                } else {

                    backTop.classList.remove("show");

                }
            }
        );


        backTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }


    // ==========================================
    // PROJECT CARD HOVER
    // ==========================================

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(
        function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

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
                        (y - centerY) / 25;

                    const rotateY =
                        (centerX - x) / 25;

                    card.style.transform =
                        `perspective(800px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-5px)`;
                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform =
                        "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";

                }
            );
        }
    );


    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    // ==========================================
    // SUCCESS MESSAGE
    // ==========================================

    console.log(
        "Portfolio JavaScript loaded successfully 🚀"
    );

});
