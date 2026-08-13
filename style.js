/* =========================================
   KHUSHI BEAUTY - JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("show");

        if (navbar.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });


    // Close mobile menu after clicking a link
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navbar.classList.remove("show");
            menuBtn.textContent = "☰";
        });

    });
}


/* =========================================
   SHOPPING CART
   ========================================= */

let cartCount = localStorage.getItem("khushiBeautyCart");

if (!cartCount) {
    cartCount = 0;
}

cartCount = Number(cartCount);

const cartCounter = document.getElementById("cartCount");

if (cartCounter) {
    cartCounter.textContent = cartCount;
}


const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        localStorage.setItem(
            "khushiBeautyCart",
            cartCount
        );

        if (cartCounter) {
            cartCounter.textContent = cartCount;
        }

        const oldText = button.textContent;

        button.textContent = "✓ Added";

        button.style.background = "#b14e70";
        button.style.color = "white";

        setTimeout(function () {

            button.textContent = oldText;

            button.style.background = "";
            button.style.color = "";

        }, 1200);

    });

});


/* =========================================
   PRODUCT SEARCH
   ========================================= */

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase();

        products.forEach(function (product) {

            const productName =
                product.getAttribute("data-name").toLowerCase();

            const productText =
                product.textContent.toLowerCase();

            if (
                productName.includes(searchText) ||
                productText.includes(searchText)
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

}


/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone || !message) {

            alert("Please fill in all the fields.");

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    });

}


/* =========================================
   PAGE LOAD ANIMATION
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const cards =
        document.querySelectorAll(
            ".product-card, .category-card, .feature, .detail-card"
        );

    cards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";

        setTimeout(function () {

            card.style.transition = "0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 80);

    });

});
