const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const sections = document.querySelectorAll('section');
let scrolled = false;
window.addEventListener('scroll', () => {
    scrolled = true;
    sections.forEach((section, index) => {
        const nextSection = sections[index + 1];
        const top = section.getBoundingClientRect().top;
        const height = section.offsetHeight;
        if (top <= 0 && top + height > 0) {
            section.classList.add('active');
            if (nextSection) {
                nextSection.classList.remove('active');
            }
        } else {
            section.classList.remove('active');
        }
    });
});

document.querySelector("*").addEventListener("click", function () {
    if (!scrolled) {
        scrolled = true;
        location.href = "#form";
    }
});
