const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);
item.forEach((item) => {
    const categoriesTitle = item.querySelector("h2").textContent;
    const categorieselement = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categorieselement}`);
});
