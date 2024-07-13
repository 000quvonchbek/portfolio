document.addEventListener("DOMContentLoaded", function() {
    // YouTube videolari uchun manzillar
    const videoUrls = [
        "https://www.youtube.com/embed/_uUdQ5udvN8",
        "https://www.youtube.com/embed/h6A9Ke8p4m8",
        "https://www.youtube.com/embed/6ltYYNHxz4E"
    ];

    // JavaScript orqali videolarni joylashtirish
    const moviesGrid = document.getElementById("moviesGrid");

    videoUrls.forEach(url => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        const iframe = document.createElement("iframe");
        iframe.setAttribute("width", "200");
        iframe.setAttribute("height", "300");
        iframe.setAttribute("src", url);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");

        const h3 = document.createElement("h3");
        h3.textContent = "Random Movie Title"; // Bu yerdagi titlega ta'rifi kod

        movieDiv.appendChild(iframe);
        movieDiv.appendChild(h3);
        moviesGrid.appendChild(movieDiv);
    });
});
