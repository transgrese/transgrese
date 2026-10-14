
/* TRANSGRESE — CUSTOM STAR SCROLLBAR */

document.addEventListener("DOMContentLoaded", () => {
    // Create the scrollbar if it isn't already in the HTML
    let scrollbar = document.querySelector(".star-scrollbar");

    if (!scrollbar) {
        scrollbar = document.createElement("div");
        scrollbar.className = "star-scrollbar";
        scrollbar.setAttribute("aria-hidden", "true");

        const thumb = document.createElement("div");
        thumb.className = "star-scrollbar-thumb";

        scrollbar.appendChild(thumb);
        document.body.appendChild(scrollbar);
    }

    const thumb = scrollbar.querySelector(".star-scrollbar-thumb");

    if (!thumb) return;

    function updateStar() {
        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const trackHeight = scrollbar.clientHeight;
        const starHeight = thumb.offsetHeight;
        const travelDistance = Math.max(0, trackHeight - starHeight);

        const progress = scrollableHeight > 0
            ? window.scrollY / scrollableHeight
            : 0;

        thumb.style.transform =
            `translateY(${progress * travelDistance}px)`;
    }

    window.addEventListener("scroll", updateStar, { passive: true });
    window.addEventListener("resize", updateStar);

    updateStar();
});
