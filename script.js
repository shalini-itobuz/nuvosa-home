const clientsSayDots = document.querySelectorAll(".clients-say-dot");
const themeToggle = document.getElementById("theme-toggle");
const marketingHeaders = document.querySelectorAll(
    ".marketing h2 ,.marketing h3"
);
const cardTexts = document.querySelectorAll(
    ".card-text, .card-title,.sde-need-card-title, .sde-need-card-text,.meet-our-team-card-title , .meet-our-team-card-text,.lead,.clients-say"
);
const chooseUsCards = document.querySelectorAll(
    ".choose-us-card , .marketing-card"
);
const footerTexts = document.querySelectorAll(
    ".footer, .copyright,  .terms-policy a , .nav-link , .navbar-brand , .navbar-toggler-icon , .darktext ,.subscribe-tag"
);
const footerNavLinks = document.querySelectorAll(".footer-nav .nav-link  ");
const chooseUsCardsContainer = document.querySelectorAll(
    ".clients-say-section-container"
);

function setTextColor(color) {
    marketingHeaders.forEach((header) => {
        header.style.color = color;
    });
}

function setCardTextColor(color) {
    cardTexts.forEach((text) => {
        text.style.color = color;
    });
}

function setChooseUsCardStyle(backgroundColor, padding) {
    chooseUsCards.forEach((card) => {
        card.style.backgroundColor = backgroundColor;
        card.style.padding = padding;
    });
}
function setFooterTextColor(color) {
    footerTexts.forEach((text) => {
        text.style.color = color;
    });
}
function setFooterNavLinkColor(color) {
    footerNavLinks.forEach((link) => {
        link.style.color = color + " !important";
    });
}
function clientsSaySection(backgroundColor) {
    chooseUsCardsContainer.forEach((card) => {
        card.style.backgroundColor = backgroundColor;
        card.style.padding = padding;
    });
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        document.documentElement.style.setProperty("--background-color", "black");
        document.documentElement.style.setProperty("--text-color", "#FAFAFA");
        themeToggle.textContent = "Light";
        setTextColor("#FAFAFA");
        setCardTextColor("black");
        setChooseUsCardStyle("#864AF9", "10%");
        setFooterTextColor("#FAFAFA");
        setFooterNavLinkColor("#FAFAFA");
        clientsSayDots.forEach((dot) => {
            dot.style.backgroundColor = "#ffffff";
            clientsSaySection("black");
        });
    } else {
        document.documentElement.style.setProperty("--background-color", "#FAFAFA");
        document.documentElement.style.setProperty("--text-color", "#212528");
        themeToggle.textContent = "Dark";
        setTextColor("#212528");
        setCardTextColor("inherit");
        setChooseUsCardStyle("", "");
        setFooterTextColor("#212528");
        setFooterNavLinkColor("#212528");
        clientsSayDots.forEach((dot) => {
            dot.style.backgroundColor = "#333";
            clientsSaySection("inherit");
        });
    }
});
