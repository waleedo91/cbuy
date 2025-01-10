const jsonData = fetch("../products.json")
  .then((response) => response.json())
  .then((data) => data);

// console.log(jsonData);

async function dataList(products) {
  const listData = await products;
  const listSection = document.getElementById("catalog-list");
  listData.forEach((product) => {
    listSection.innerHTML += `
        <li class='list-item'>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
            </div>
            <img src="${product.img}" class="card-img-top" alt="...">
            </div>
        </li>
    `;
  });
}

dataList(jsonData);
