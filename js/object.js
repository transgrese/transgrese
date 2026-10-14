
/* =====================================
   TRANSGRESE — OBJECT PAGE
   ===================================== */

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const main = document.getElementById("object-main");

if (!main) {
    console.error('Object page element "#object-main" was not found.');
} else {
    const obj = Array.isArray(OBJECTS)
        ? OBJECTS.find(object => object.id === id)
        : null;

    if (!obj) {
        main.innerHTML = `
            <p>Object not found.</p>
            <p><a href="gallery.html">Back to gallery</a></p>
        `;
    } else {
        const photos = Array.isArray(obj.photos)
            ? obj.photos
            : [];

        const description = obj.description || "";

        main.innerHTML = `
            <h2>${obj.name || "Untitled object"}</h2>

            <div class="photos">
                ${photos.map(photo => `
                    <img
                        src="${photo}"
                        alt="${obj.name || "Object"}"
                        loading="lazy"
                    >
                `).join("")}
            </div>

            <div class="object-description">
                ${description
                    .split(/\n\s*\n/)
                    .map(paragraph => paragraph.trim())
                    .filter(Boolean)
                    .map(paragraph => `<p>${paragraph}</p>`)
                    .join("")}
            </div>

            ${Array.isArray(obj.details) && obj.details.length ? `
                <section class="object-details">
                    <h3 class="details-heading">DETAILS</h3>

                    ${obj.details.map(item => `
                        <div class="detail-row">
                            <strong class="detail-label">
                                ${item.label || ""}
                            </strong>

                            <span class="detail-value">
                                ${item.value || ""}
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
}
