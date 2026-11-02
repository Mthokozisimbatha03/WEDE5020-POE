document.addEventListener("DOMContentLoaded", () => {
    // 1. Gallery Lightbox Functionality
    const galleryLinks = document.querySelectorAll(".gallery a");
    
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.cssText = "display:none; position:fixed; z-index:1000; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;";
    
    const lightboxImg = document.createElement("img");
    lightboxImg.style.cssText = "max-width:90%; max-height:90%; border-radius:8px;";
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    galleryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            lightboxImg.src = link.href;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // 2. Form Validation
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            const email = form.querySelector("input[type='email']");
            const phone = form.querySelector("input[type='tel']");
            
            if (email && !email.value.includes("@")) {
                alert("Please enter a valid email address.");
                e.preventDefault();
            }
            if (phone && phone.value.length < 10) {
                alert("Please enter a valid phone number (at least 10 digits).");
                e.preventDefault();
            }
        });
    });
});