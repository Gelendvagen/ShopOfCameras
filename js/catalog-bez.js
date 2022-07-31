let cameras = [
    { name: "Z5", text: "Добро пожаловать в многогранный мир \n\ полнокадровой фотосъемки! \n\ \n\ Формат FX \n\ 24,3 МП \n\ 100-51200 единиц ISO \n\ Видеоролики 4K \n\ 4,5 кадра в секунду \n\ 273 точки фокусировки \n\ Размеры (Ш х В х Д) - 134 x 100,5 x 69,5 мм \n\ Стоимость - $1500" },
    { name: "Z6", text: "Космическая скорость серийной съемки, великолепная \n\ производительность при слабом освещении! \n\ \n\ Формат FX \n\ 24,5 МП \n\ 100-51200 единиц ISO \n\ Видеоролики 4K \n\ 12 кадров в секунду \n\ 273 точки фокусировки \n\ Размеры (Ш х В х Д) - 134 x 100,5 x 67,5 мм \n\ Стоимость - $2000" },
    { name: "Z9", text: "Без ошибок! Без условий! Без \n\ ограничений! \n\ \n\ Формат FX \n\ 45,7 МП \n\ 64-25600 единиц ISO \n\ Видеоролики 8K \n\ 20 кадров в секунду \n\ 493 точки фокусировки \n\ Размеры (Ш х В х Д) - 149 x 149,5 x 90,5 мм \n\ Стоимость - $3000" },
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