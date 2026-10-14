
/* =====================================
   TRANSGRESE — GALLERY PAGE
   ===================================== */

const grid = document.getElementById("gallery-grid");

if (grid && typeof OBJECTS !== "undefined") {
    OBJECTS.forEach(obj => {
        const card = document.createElement("a");

        card.className = "object-card";
        card.href = `object.html?id=${obj.id}`;

        card.innerHTML = `
            <img src="${obj.thumbnail}" alt="${obj.name}">
            <p>${obj.name}</p>
        `;

        grid.appendChild(card);
    });
}
