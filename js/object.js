const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const obj = OBJECTS.find(o => o.id === id);

const main = document.getElementById("object-main");

if (!obj) {

    main.innerHTML = `
        <p>
            Object not found.
            <a href="gallery.html">Back to gallery</a>
        </p>
    `;

} else {

    main.innerHTML = `
        <h2>${obj.name}</h2>

        <div class="photos">
            ${obj.photos
                .map(p => `<img src="${p}" alt="${obj.name}">`)
                .join("")}
        </div>

        <p>${obj.description}</p>

        <a
            class="shop-link"
            href="${obj.shopUrl}"
            target="_blank"
            rel="noopener"
        >
            Buy this object (external shop)
        </a>
    `;
}
