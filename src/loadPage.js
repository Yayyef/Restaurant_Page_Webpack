function loadPage() {
    const content = document.querySelector("#content");

    const restaurantName = document.createElement("h1");
    const headline = document.createElement("quote");
    const mainImg = document.createElement("img");


    restaurantName.textContent = "La Bella Notte";
    headline.textContent = "Toutes les saveurs de l'Italie";
    mainImg.setAttribute("alt", "Le Colisée");

    content.appendChild(restaurantName);
    content.appendChild(headline);
    content.appendChild(mainImg);
}

// loadPage();

export {loadPage};