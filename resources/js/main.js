
const navigation_bar = document.getElementById("navigation-section");

document.addEventListener('scroll', () => {

    if (scrollY > 0) {
        navigation_bar.style.backgroundColor = "black";
    } else {
        navigation_bar.style.backgroundColor = "transparent";
    }
})


const cancel_btn = document.getElementById("cancel-btn");
const toast_container = document.getElementById("contact-us-toast-btn");

cancel_btn.addEventListener ('click', () => {
    toast_container.style.display = "none";
})


const section = document.querySelector(".service-section");
document.addEventListener('scroll', () => {
    

    const sectionRect = section.getBoundingClientRect();

    if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
        toast_container.style.backgroundColor = "white";
        toast_container.style.color = "black";
        cancel_btn.style.color = "black"
    } 
    else {
        toast_container.style.backgroundColor = "black";
        toast_container.style.color = "white";
        cancel_btn.style.color = "white";

    }
})

// animate text
const power_text = document.querySelector(".service-section-wrapper-photo-h2");

document.addEventListener('scroll', () => {

    const textRect = power_text.getBoundingClientRect();

    if (textRect.top < window.innerHeight && textRect.bottom > 0) {
        power_text.style.animation = "fadeIn 3s";
    }
})