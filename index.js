const category_list_container = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (category) =>
        `<a class="a_index category" href="produktliste.html?category=${category.category}">${category.category}</a>
            `
    )
    .join("");
  console.log(markup);
  category_list_container.innerHTML = markup;
}
