let cameras = [
    { name: "COOLPIX P950", text: "Независимо от того, где вы находитесь, суперзум даст вам возможность \n\ приближаться к объектам и снимать грандиозные фотографии! \n\ \n\ Формат FX \n\ 16 МП \n\ 100-1600 единиц ISO \n\ Видеоролики 4K \n\ 25 кадров в секунду \n\ 11 точек фокусировки \n\ Размеры (Ш х В х Д) - 140,2 x 109,6 x 149,8 мм (без выступающих частей) \n\ Стоимость - $500" },
    { name: "COOLPIX B500", text: "Фотокамера с легкостью перенесет вас в эпицентр событий, а боковой \n\ рычажок зуммирования обеспечит дополнительную устойчивость! \n\ \n\ Формат FX \n\ 16 МП \n\ 125-3200 единиц ISO \n\ Видеоролики 4K \n\ 25 кадров в секунду \n\ 99 точек фокусировки \n\ Размеры (Ш х В х Д) - 113,5 x 78,3 x 94,9 мм (без выступающих частей) \n\ Стоимость - $700" },
];

let cameraBox = document.querySelector(".container");
let prev = cameraBox.querySelector(".preview");

for (let cam of cameras) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerText = cam.name;
    cameraBox.append(card);
    card.onclick = function() {
        prev.innerText = cam.text;
    };
}