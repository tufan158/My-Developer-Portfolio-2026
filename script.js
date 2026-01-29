
const themeBtn = document.getElementById('theme');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const textElement = document.getElementById('typing-text');


// 3. HAMBURGER MENÜ KAPCSOLÓ
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 4. GÉPELŐ EFFEKTUS LOGIKÁJA
const words = ['Full Stack Developer', 'Problem Solver', 'JS Enthusiast'];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

// 5. INDÍTÁS AMIKOR BETÖLT AZ OLDAL
window.onload = () => {
    if (textElement) {
        type();
    }
};

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-hidden');
    observer.observe(section);
});