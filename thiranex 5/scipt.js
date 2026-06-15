console.log("Portfolio Website Loaded Successfully 🚀");

/* ==========================
   ACTIVE NAVIGATION
========================== */

const navLinks =
document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    if (
        link.href === window.location.href
    ) {

        link.classList.add("active");

    }

});

/* ==========================
   CONTACT FORM
========================== */

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "✅ Thank you for contacting me! Your message has been received successfully."
            );

            contactForm.reset();

        }
    );

}

/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements =
document.querySelectorAll(

    ".project-card,\
    .skill-card,\
    .skill-box,\
    .service-card,\
    .achievement-card,\
    .feature-card,\
    .social-card,\
    .stat-box,\
    .info-card"

);

const observer =
new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting
            ) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(30px)";

    el.style.transition =
    "all 0.8s ease";

    observer.observe(el);

});

/* ==========================
   HERO TYPING EFFECT
========================== */

const heroTitle =
document.querySelector(".hero h1");

if (heroTitle) {

    const originalText =
    heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let i = 0;

    function typeEffect() {

        if (
            i < originalText.length
        ) {

            heroTitle.innerHTML +=
            originalText.charAt(i);

            i++;

            setTimeout(
                typeEffect,
                40
            );

        }

    }

    typeEffect();

}

/* ==========================
   CARD HOVER EFFECT
========================== */

const cards =
document.querySelectorAll(

    ".project-card,\
    .skill-card,\
    .skill-box,\
    .service-card,\
    .achievement-card,\
    .social-card"

);

cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-10px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0px)";

        }
    );

});

/* ==========================
   PROJECT COUNTER ANIMATION
========================== */

const stats =
document.querySelectorAll(".stat-box h3");

stats.forEach(stat => {

    const target =
    parseInt(stat.innerText);

    if (
        isNaN(target)
    ) return;

    let count = 0;

    function updateCounter() {

        if (
            count < target
        ) {

            count++;

            stat.innerText =
            count + "+";

            setTimeout(
                updateCounter,
                20
            );

        }

    }

    updateCounter();

});

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add(
    "top-btn"
);

document.body.appendChild(
    topButton
);

topButton.style.position =
"fixed";

topButton.style.bottom =
"20px";

topButton.style.right =
"20px";

topButton.style.padding =
"12px 18px";

topButton.style.border =
"none";

topButton.style.borderRadius =
"50%";

topButton.style.background =
"#38bdf8";

topButton.style.color =
"#000";

topButton.style.cursor =
"pointer";

topButton.style.display =
"none";

topButton.style.fontSize =
"18px";

topButton.style.fontWeight =
"bold";

topButton.style.zIndex =
"1000";

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 300
        ) {

            topButton.style.display =
            "block";

        }

        else {

            topButton.style.display =
            "none";

        }

    }
);

topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

/* ==========================
   DYNAMIC FOOTER YEAR
========================== */

const footerText =
document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
    `© ${new Date().getFullYear()} Mithunvarshan S P`;

}

console.log(
    "All Features Loaded Successfully ✨"
);