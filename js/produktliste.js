fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //LOOPER OG KALDER showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  // console.log(product);
  // fang template
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  // appende
  document.querySelector("main").appendChild(copy);
}

/*

            <template id="smallProductTemplate">
                <article class="smallProduct">
                    <img src="webp/S/1165.webp" alt="pic1">
                    <h3>Mean Team India Cricket Jersey</h3>
                    <p class="prodtext">Topwear, T-shirts</p>
                    <p class="pris"><span>Prev.</span> DKK 1595</p>
                    <div class="discount">
                        <p>Now DKK 1560,-</p>
                        <p>-34%</p>
                    </div>
                    <a href="produkt.html">Se produkt</a>
                </article>
            </template>
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/
