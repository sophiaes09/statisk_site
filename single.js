const myproduct = new URLSearchParams(window.location.search).get("id");

let produktside_container = document.querySelector(".produktside_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${myproduct}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  produktside_container.innerHTML = `
    <div class="billede_produktside">
                <img class="produkt_billede_produktside" src="https://kea-alt-del.dk/t7/images/webp/640/${myproduct}.webp"
                    alt="billede1">
                    <div class="rabat_boks2 ${!data.discount && "hide"} ">${data.discount}%</div>
                    <div class="udsolgt_boks2 ${!data.soldout && "hide"}">Sold Out</div>
            </div>
            <div>
                <h1>${data.brandname}</h1>
                <p class="p_produktsiden"><b>${data.productdisplayname}</b></p>
                <p class="ny_pris2 ${!data.discount && "hide"}">Nypris: ${Math.round(data.price * (1 - data.discount / 100))} kr.</p>
                <p class="pris_før">Pris: ${data.price} kr.</p>
                <div class="kassemedtre">
                <p class="p_farven_blå"> Køn: ${data.gender}</p>
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
