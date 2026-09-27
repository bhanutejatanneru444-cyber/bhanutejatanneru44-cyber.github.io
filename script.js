/* =========================================
PORTFOLIO JAVASCRIPT
========================================= */

/* =========================================
TYPING ANIMATION
========================================= */

const typingElement = document.getElementById("typing");

const words = [
"Developer",
"BTech Student",
"Python Learner",
"AI Enthusiast",
"Problem Solver"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

```
const currentWord = words[wordIndex];

if (!deleting) {

    typingElement.textContent =
        currentWord.substring(
            0,
            characterIndex + 1
        );

    characterIndex++;

    if (characterIndex === currentWord.length) {

        deleting = true;

        setTimeout(typeEffect, 1500);

        return;
    }

} else {

    typingElement.textContent =
        currentWord.substring(
            0,
            characterIndex - 1
        );

    characterIndex--;

    if (characterIndex === 0) {

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
```

}

typeEffect();

/* =========================================
