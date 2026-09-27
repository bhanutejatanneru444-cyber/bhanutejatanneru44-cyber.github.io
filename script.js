// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

console.log("Portfolio website loaded successfully!");

// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

```
link.addEventListener("click", function (event) {

    event.preventDefault();

    const target = document.querySelector(
        this.getAttribute("href")
    );

    if (target) {

        target.scrollIntoView({
            behavior: "smooth"
        });

    }

});
```

});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {

```
const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {

    navbar.style.background =
        "rgba(10, 10, 15, 0.97)";

} else {

    navbar.style.background =
        "rgba(10, 10, 15, 0.90)";

}
```

});

// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.querySelector("footer p");

if (yearElement) {

```
const currentYear = new Date().getFullYear();

yearElement.innerHTML =
    "© " + currentYear +
    " Bhanu. Built with HTML, CSS & JavaScript.";
```

}
