// Header Sticky
let header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});



// Nav Menu

const navMenuToggle = document.getElementById("nav-menu-toggle-btn");
const navMenu = document.getElementById("nav-menu");
const navMenuClose = document.getElementById("nav-menu-close");

if (navMenuToggle) {

    navMenuToggle.addEventListener("click", () => {
        navMenu.style.display = "flex";
    })

    navMenuClose.addEventListener("click", () => {
        navMenu.style.display = "none";
    })

}



// Mobile Menu

const mobMenuToggle = document.getElementById("mob-menu-toggle-btn");
const mobMenuClose = document.getElementById("mob-menu-close-btn");
const mobMenu = document.getElementById("mob-menu");

mobMenuToggle.addEventListener("click", () => {

    mobMenu.classList.add("mob-menu-show");
})

mobMenuClose.addEventListener("click", () => {

    mobMenu.classList.remove("mob-menu-show");

})



// Login Section Toggle

const loginSec = document.getElementById("login-sec");
const logSecToggle = document.querySelectorAll(".log-sec-toggle");
const logSecClose = document.getElementById("log-sec-close");

if(loginSec){

    logSecToggle.forEach((e)=>{

        e.addEventListener("click", ()=>{
            loginSec.style.display = "flex";
        });

    });

    logSecClose.addEventListener("click", ()=>{
        loginSec.style.display = "none";
    });

}


// Parallalx Banner

// $(document).ready(function () {
//     $('.parallax-window').parallax();
// })


// Contact Form Validation


function validContactForm() {
    let contactForm = document.forms["contact-form"];
    console.log(contactForm);

    let firstName = contactForm['first-name'].value.trim();
    let lastName = contactForm['last-name'].value.trim();
    let email = contactForm['email'].value.trim();
    let phNum = contactForm['ph-num'].value.trim();
    let enquiry = contactForm['enquiry'].value;
    let bookDate = contactForm['book-date'].value;
    let msg = contactForm['msg'].value.trim();

    // return false;

    if ((firstName.length <= 0) || (lastName.length <= 0) || (email.length <= 0)) {

        document.getElementById("fr-name-err").innerText = "*Enter a valid first name.";
        document.getElementById("ls-name-err").innerText = "*Enter a valid last name.";
        document.getElementById("email-err").innerText = "*Enter a valid email.";
        return false;

    } else {

        if (firstName.length > 7 || firstName.length < 3) {
            document.getElementById("fr-name-err").innerText = "*First name must be have 3 to 7 characters.";
            return false;
        } else if (firstName.match(/[0-9]/g)) {
            document.getElementById("fr-name-err").innerText = "Numbers are not allowed"
            return false;
        }
        else if (firstName.match(/[$&+,:;=?@#|'<>.-^*()%!_-]/g)) {
            document.getElementById("fr-name-err").innerText = "Special character are not allowed"
            return false;
        }



        if (lastName.length > 7 || lastName.length < 3) {
            document.getElementById("ls-name-err").innerText = "*Last name must be have 3 to 7 characters.";
            return false;
        } else if (lastName.match(/[0-9]/g)) {
            document.getElementById("ls-name-err").innerText = "Numbers are not allowed"
            return false;
        }
        else if (lastName.match(/[$&+,:;=?@#|'<>.-^*()%!_-]/g)) {
            document.getElementById("ls-name-err").innerText = "Special character are not allowed"
            return false;
        }



        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            document.getElementById("email-err").innerText = "*Enter a valid email."
            return false;
        }


        if (phNum.length > 0) {

            if (!phNum.match(/^[0-9]{10}$/g)) {
                document.getElementById("ph-err").innerText = "*Enter a valid phone number."
                return false;
            }
        }


        if (enquiry.length > 0) {
            if (bookDate.length <= 0) {
                document.getElementById("date-err").innerText = "*Enter a valid date."
                return false;
            }
        }

        if (msg.length < 30) {
            document.getElementById("msg-err").innerText = "*Message must be have atleast 30 characters."
            return false;
        }
    }

}


// WOW Js

var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();