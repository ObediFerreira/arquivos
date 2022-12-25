const menu = document.getElementById(":R2ciot:");

function showMenu() {
    // alert("showMenu();");

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else if (menu.style.display == "block") {
        menu.style.display = "none";
    }
}

const arrayItem = [];
arrayItem[0] = document.getElementById("all-items").classList;
arrayItem[1] = document.getElementById("stock-video").classList;
arrayItem[2] = document.getElementById("video-templates").classList;
arrayItem[3] = document.getElementById("music").classList;
arrayItem[4] = document.getElementById("sound-effects").classList;
arrayItem[5] = document.getElementById("graphic-templates").classList;
arrayItem[6] = document.getElementById("graphics").classList;
arrayItem[7] = document.getElementById("presentation-templates").classList;
arrayItem[8] = document.getElementById("photos").classList;
arrayItem[9] = document.getElementById("fonts").classList;
arrayItem[10] = document.getElementById("add-ons").classList;
arrayItem[11] = document.getElementById("web-templates").classList;
arrayItem[12] = document.getElementById("cms-templates").classList;
arrayItem[13] = document.getElementById("wordpress").classList;
arrayItem[14] = document.getElementById("3d").classList;

function menuClickItem(value) {
    alert("menuClickItem();\n" + value);

    if (value == "all-items") {
        // alert(value);

        arrayItem[0].add("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Todos os itens"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "stock-video") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].add("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Banco de Vídeo"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "video-templates") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].add("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Modelos de vídeo"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "music") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].add("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Músicas"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "sound-effects") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].add("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Efeitos sonoros"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "graphic-templates") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].add("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Modelos gráficos"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "graphics") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].add("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Gráficos"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "presentation-templates") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].add("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Modelos de apresentação"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "photos") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].add("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Fotos"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "fonts") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].add("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Fontes"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "add-ons") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].add("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Add-ons"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "web-templates") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].add("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Modelos de sites"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "cms-templates") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].add("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Modelos de CMS"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "wordpress") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].add("myStyle");
        arrayItem[14].remove("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Wordpress"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    } else if (value == "3d") {
        // alert(value);

        arrayItem[0].remove("myStyle");
        arrayItem[1].remove("myStyle");
        arrayItem[2].remove("myStyle");
        arrayItem[3].remove("myStyle");
        arrayItem[4].remove("myStyle");
        arrayItem[5].remove("myStyle");
        arrayItem[6].remove("myStyle");
        arrayItem[7].remove("myStyle");
        arrayItem[8].remove("myStyle");
        arrayItem[9].remove("myStyle");
        arrayItem[10].remove("myStyle");
        arrayItem[11].remove("myStyle");
        arrayItem[12].remove("myStyle");
        arrayItem[13].remove("myStyle");
        arrayItem[14].add("myStyle");

        document.querySelectorAll('div[class="libZM90L"]').forEach((el, i) => {
            el.innerText = "Objetos 3D"
        })

        setTimeout(() => {
            menu.style.display = "none";
        }, 250)
    }
}
