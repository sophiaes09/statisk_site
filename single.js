let productId = 1163;
let produktside_container = document.querySelector(".produktside_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  produktside_container.innerHTML = `
    <div class="billede_produktside">
                <img class="produkt_billede_produktside" src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
                    alt="billede1">
            </div>
            <div>
                <h1>${data.brandname}</h1>
                <p class="p_produktsiden"><b>${data.productdisplayname}</b></p>
                <p class="p_produktsiden">Pris: ${data.price} kr.</p>
                <div class="kassemedtre">
                <p class="p_farven_blå">Farve: <b>Blå</b></p>
                <p class="p_farven_blå"> Kategori: ${data.category}</p>
                <p class="p_farven_blå"> Type: ${data.usagetype}</p>
                <div/>
                <div class="størrelses_container">
                    <div class="størrelse_dropdown_menu">
                        <label for="size"></label>
                        <select id="size" name="size">
                            <option value="" disabled selected>Vælg størrelse</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xl">Extra Large</option>
                        </select>
                    </div>
                    <button class="indkøbskurv_knap">Læg i indkøbskurv</button>
                </div>
            </div>`;
}
