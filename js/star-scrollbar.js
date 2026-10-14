
/* TRANSGRESE — CUSTOM STAR SCROLLBAR */

document.addEventListener("DOMContentLoaded", () => {
    const scrollbar = document.querySelector(".star-scrollbar");
    const star = document.querySelector(".star-scrollbar-thumb");

    if (!scrollbar || !star) return;

    function updateStarScrollbar() {
        const pageHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const maxScroll = pageHeight - viewportHeight;

        const trackHeight = scrollbar.clientHeight;
        const starHeight = star.offsetHeight;
        const maxTravel = Math.max(0, trackHeight - starHeight);

        const progress = maxScroll > 0
            ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
            : 0;

        star.style.transform =
            `translateY(${progress * maxTravel}px)`;

        scrollbar.style.display =
            maxScroll > 0 ? "block" : "none";
    }

    window.addEventListener("scroll", updateStarScrollbar, {
        passive: true
    });

    window.addEventListener("resize", updateStarScrollbar);
    window.addEventListener("load", updateStarScrollbar);

    if ("ResizeObserver" in window) {
        new ResizeObserver(updateStarScrollbar).observe(
            document.documentElement
        );
    }

    updateStarScrollbar();
});
