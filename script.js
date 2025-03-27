document.addEventListener("DOMContentLoaded", () => {
    const smallCircle = document.querySelector(".cursor-circle.small");
    const largeCircle = document.querySelector(".cursor-circle.large");

    document.addEventListener("mousemove", (e) => {
        gsap.to(smallCircle, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(largeCircle, { x: e.clientX, y: e.clientY, duration: 0.2 });
    });

    // Apply hover effect to all interactive elements
    const hoverElements = document.querySelectorAll("a, button, .btn, section, .about, .qualifications, .project, .contact");
    hoverElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            gsap.to(smallCircle, { scale: 2, duration: 0.2 });
            gsap.to(largeCircle, { scale: 1.5, duration: 0.2 });
        });

        element.addEventListener("mouseleave", () => {
            gsap.to(smallCircle, { scale: 1, duration: 0.2 });
            gsap.to(largeCircle, { scale: 1, duration: 0.2 });
        });
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");
    const text = document.querySelector(".preloader-text");

    // Fade-in effect for text with scaling
    gsap.to(text, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" });

    // After 2 seconds, fade out preloader and reveal website
    gsap.to(preloader, {
        opacity: 0,
        duration: 1.5,
        delay: 2,
        ease: "power2.inOut",
        onComplete: () => {
            preloader.style.display = "none"; // Remove preloader from view
        }
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}