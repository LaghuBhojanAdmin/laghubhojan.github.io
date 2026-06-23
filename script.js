console.log("Script loaded");
const whatsappNumber = "919940547144";

async function loadProducts() {
    try {
        const response = await fetch("products.json");
        const products = await response.json();

        const grid = document.getElementById("grid");
        const search = document.getElementById("search");

        function render(filter = "") {
            grid.innerHTML = "";

            products
                .filter(product =>
                    product.name.toLowerCase().includes(filter.toLowerCase())
                )
                .forEach(product => {

                    const card = document.createElement("div");
                    card.className = "card";

                    const message =
                        `Hello Laghu Bhojan,%0A%0A` +
                        `I would like to order:%0A` +
                        `${product.name}%0A` +
                        `100g: ${product.price100}%0A` +
                        `1kg: ${product.price1kg}`;

                    card.innerHTML = `
                        <h3>${product.name}</h3>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>100g:</strong> ${product.price100}</p>
                        <p><strong>1kg:</strong> ${product.price1kg}</p>
                        <a class="btn"
                           href="https://wa.me/${whatsappNumber}?text=${message}"
                           target="_blank">
                           Order on WhatsApp
                        </a>
                    `;

                    grid.appendChild(card);
                });
        }

        render();

        search.addEventListener("input", e => {
            render(e.target.value);
        });

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

loadProducts();
