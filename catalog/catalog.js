const jsonData = fetch("../products.json")
  .then((response) => response.json())
  .then((data) => data);

// Uses the fetch request above to capture the products.json file to get all products and create a list of the products in proper format.
async function dataList(products) {
  const listData = await products;
  const listSection = document.getElementById("catalog-list");
  listData.forEach((product) => {
    listSection.innerHTML += `
        <li class='list-item'>
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
            </div>
            <p>$${product.price}</p>
            <img src="${product.img}" class="card-img-top product-image" alt="${product.name}">
            </div>
        </li>
    `;
  });
}

dataList(jsonData);
