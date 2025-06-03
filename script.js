function navigateTo(page) {
    window.location.href = page + ".html";
}

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact form validation and submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let status = document.getElementById("form-status");

        if (name && email && message) {
            status.innerText = `Thank you, ${name}! Your message has been sent.`;
            status.style.color = "green";
            this.reset();
        } else {
            status.innerText = "Please fill out all fields.";
            status.style.color = "red";
        }
    });

    // Hover effect for projects
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });
        project.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});


 function navigateTo(page) {
    window.location.assign(page + ".html");
}

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                history.pushState({}, "", "#" + targetId);
            }
        });
    });

    // Contact form validation and submission
    document.getElementById("Contact").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let status = document.getElementById("form-status");

        const emailPattern = ".gmail.com";

        if (!name || !email || !message) {
            status.innerText = "Please fill out all fields.";
            status.style.color = "red";
        } else if (!emailPattern.test(email)) {
            status.innerText = "Please enter a valid email address.";
            status.style.color = "red";
        } else {
            status.innerText = `Thank you, ${name} ! Your message has been sent.`;
            status.style.color = "green";
            this.reset();
            setTimeout(() => status.innerText = "", 5000);
        }
    });

    // Hover effect for projects with smooth transition
    document.querySelectorAll(".project").forEach(project => {
        project.style.transition = "transform 0.3s ease-in-out";
        project.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });
        project.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Hover effect for the "contact" tab
    const contactTab = document.querySelector("Contact.html"); // assuming the contact tab has this ID
    if (contactTab) {
        contactTab.style.transition = "color 0.3s ease-in-out, transform 0.3s ease-in-out";
        contactTab.addEventListener("mouseenter", function () {
            this.style.color = "#007BFF"; // Change to your desired hover color
            this.style.transform = "scale(1.1)";
        });
        contactTab.addEventListener("mouseleave", function () {
            this.style.color = ""; // Reset color to original
            this.style.transform = "scale(1)";
        });
    }
});


