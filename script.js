document.addEventListener("DOMContentLoaded", () => {
    const smallCircle = document.querySelector(".cursor-circle.small");
    const mediumCircle = document.querySelector(".cursor-circle.medium");
    const largeCircle = document.querySelector(".cursor-circle.large");

    document.addEventListener("mousemove", (e) => {
        gsap.to(smallCircle, { x: e.clientX, y: e.clientY, duration: 0.05 });

        // Medium circle follows the small circle with a delay
        gsap.to(mediumCircle, { 
            x: e.clientX, 
            y: e.clientY, 
            duration: 0.3, 
            ease: "power2.out" 
        });

        // Large circle follows the medium circle with a longer delay
        gsap.to(largeCircle, { 
            x: e.clientX, 
            y: e.clientY, 
            duration: 0.6, 
            ease: "power2.out" 
        });
    });

    // Add hover effect for links and buttons
    const hoverElements = document.querySelectorAll("a, button, .btn, section, .about, .qualifications, .project, .contact");
    hoverElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            gsap.to(smallCircle, { scale: 2, duration: 0.2 });
            gsap.to(mediumCircle, { scale: 1.8, duration: 0.2 });
            gsap.to(largeCircle, { scale: 1.5, duration: 0.2 });
        });

        element.addEventListener("mouseleave", () => {
            gsap.to(smallCircle, { scale: 1, duration: 0.2 });
            gsap.to(mediumCircle, { scale: 1, duration: 0.2 });
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


app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  