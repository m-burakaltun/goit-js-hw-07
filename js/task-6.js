function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.getElementById("controls");
  const input = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  function createBoxes(amount) {
    // Önce mevcut kutuları temizliyoruz
    boxesContainer.innerHTML = "";
    
    let size = 30;
    const fragments = document.createDocumentFragment();
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";
      fragments.appendChild(box);
      size += 10;
    }
    
    boxesContainer.appendChild(fragments);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    }
  });

  destroyButton.addEventListener("click", destroyBoxes);
});
