document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem("profileViewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("profileViewCount", count);
    const counterDiv = document.createElement("div");
    counterDiv.style.color = "#0078d7";
    counterDiv.style.fontWeight = "bold";
    counterDiv.style.marginTop = "10px";
    counterDiv.textContent = `Profile views: ${count}`;
    const footerContainer = document.querySelector("footer .container");
    if (footerContainer) {
        footerContainer.appendChild(counterDiv);
    }
});
