const getEle = (id) => document.getElementById(id);
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const rendercolorHTML = (rs) => {
  let content = "";
  for (valueColor of rs) {
    content += `
        <button class="color-button ${valueColor}" onclick="changeColor('${valueColor}')">
        </button>
        `;
  }
  console.log(content);
  getEle("colorContainer").innerHTML = content;
};

window.onload = () => {
  rendercolorHTML(colorList);
};
console.log(window);

const changeColor = (colorchange) => {
  for (value of colorList) {
    if (value === colorchange) {
      const colorValue = value;
      let element = getEle("house");
      element.className = `house ${colorValue}`;
    }
  }
};
