setInterval(() => {
    var content = "img[alt='www.000webhost.com']"
    var imgElement = document.querySelector(content);
    if (imgElement) {
        imgElement.style.display = "none";
        clearInterval();
    }
}, 100);