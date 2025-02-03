const mycategory = new URLSearchParams(window.location.search).get("category");
const product_list_container = document.querySelector(".product_list_container");

const overskrift = document.querySelector("h1");
overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products/?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `<div class="produkt">
                <a href="produkt.html?id=${product.id}">
                    <img class="produkt_billede" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                        alt="billede1">
                </a>
                <h3>${product.brandname}</h3>
                <p><b>${product.productdisplayname}</b></p>
                <div>
                    <p>Pris: ${product.price} kr.</p>
                </div>
            </div>
            `
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
