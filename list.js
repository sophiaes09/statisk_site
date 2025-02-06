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
                <div class="udsolgt_boks ${!product.soldout && "hide"}">Sold Out</div>
                    <img class="${product.soldout && "udsolgt"} produkt_billede" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                        alt="billede1">
                </a>
                <h3>${product.brandname}</h3>
                <p><b>${product.productdisplayname}</b></p>
                <div>
                    <p class="ny_pris ${!product.discount && "hide"}">Nypris: ${Math.round(product.price * (1 - product.discount / 100))} kr.</p>
                    <p class="pris_før2">Pris: ${product.price} kr.</p>
                </div>
                <div class="rabat_boks ${!product.discount && "hide"} ">${product.discount}%</div>
            </div>
            `
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
