// ==========================
// LOADER
// ==========================

window.onload = function () {

    const loader = document.getElementById("loader");

    if(loader){
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);

        }, 1500);
    }

};
// ==========================
// PROGRESS BAR
// ==========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progress-bar");

    if(progressBar){
        progressBar.style.width = progress + "%";
    }

});

// ==========================
// CURSOR GLOW
// ==========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if(glow){

        glow.style.left = e.clientX - 200 + "px";
        glow.style.top = e.clientY - 200 + "px";

    }

});

// ==========================
// BACK TO TOP
// ==========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(backToTop){

        if(window.scrollY > 500){
            backToTop.style.display = "block";
        }else{
            backToTop.style.display = "none";
        }

    }

});

if(backToTop){

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

// ==========================
// GALLERY MODAL
// ==========================

const galleryModal = document.getElementById("galleryModal");
const openGalleryBtn = document.getElementById("openGallery");
const closeGalleryBtn = document.getElementById("closeGallery");

if(openGalleryBtn){

    openGalleryBtn.addEventListener("click", () => {

        galleryModal.style.display = "block";

    });

}

if(closeGalleryBtn){

    closeGalleryBtn.addEventListener("click", () => {

        galleryModal.style.display = "none";

    });

}

// ==========================
// LIGHTBOX
// ==========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("click", () => {

        if(lightbox && lightboxImg){

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        }

    });

});

document.querySelectorAll(".full-gallery img").forEach(img => {

    img.addEventListener("click", () => {

        if(lightbox && lightboxImg){

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        }

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// ==========================
// VIDEO HOVER PLAY
// ==========================

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {

        video.play();

    });

    video.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
    ".video-card, .gallery-item, .skill-card, .tool-card, .timeline-item, .contact-card"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================
// HERO IMAGE FLOAT
// ==========================

const heroImage = document.querySelector(".hero-right img");

if(heroImage){

    let direction = 1;

    setInterval(() => {

        heroImage.style.transform =
            `translateY(${direction * 10}px)`;

        direction *= -1;

    }, 2000);

}
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    if(hero){
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }

});
