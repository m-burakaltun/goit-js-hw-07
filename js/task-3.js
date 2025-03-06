const inputArea = document.getElementById('name-input');
const spanArea = document.getElementById('name-output');
inputArea.addEventListener("input", () => {
    spanArea.textContent = inputArea.value.trim();
});