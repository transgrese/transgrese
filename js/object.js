
/* =====================================
   TRANSGRESE — OBJECT PAGE
   ===================================== */

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const obj = OBJECTS.find(object => object.id === id);
const main = document.getElementById("object-main");

if (!obj) {
    main.innerHTML = `
        <p>Object not found.</p>
        <p><a href="gallery.html">Back to gallery</a></p>
    `;
} else {
    main.innerHTML = `
        <h2>${obj.name}</h2>

        <div class="photos">
            ${obj.photos.map(photo => `
                <img src="${photo}" alt="${obj.name}">
            `).join("")}
        </div>

        <div class="object-description">
            ${obj.description
                .split(/\n\s*\n/)
                .map(paragraph =>
                    `<p>${paragraph.trim()}</p>`
                )
                .join("")}
        </div>

        ${obj.details && obj.details.length ? `
            <section class="object-details">
                <h3 class="details-heading">DETAILS</h3>

                ${obj.details.map(item => `
                    <div class="detail-row">
                        <strong class="detail-label">
                            ${item.label}
                        </strong>
                        <span class="detail-value">
                            ${item.value}
                        </span>
                    </div>
                `).join("")}
            </section>
        ` : ""}

        ${obj.shopUrl ? `
            <a
                class="shop-link"
                href="${obj.shopUrl}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Buy this object (external shop)
            </a>
        ` : ""}
    `;
}
