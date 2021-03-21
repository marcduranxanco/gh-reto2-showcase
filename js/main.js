"use strict";

const shoppingCart = document.querySelector("#shopping-cart");
const shoppingList = document.querySelector("#shopping-list");
const showcase_div = document.querySelector("#showcase_div");
let draggables_div;

//SHOWCASE 'DATABASE'
//SHOWCASE 'DATABASE'

//OBJECT PRODUCTS CREATION
function Product(id_product, name_product, img_path, type_product) {
  this.id_product = id_product;
  this.name_product = name_product;
  this.img_path = `https://image.tmdb.org/t/p/w500${img_path}`;
  this.type_product = type_product;

  return this;
}

//ARRAY PRODUCTS
let products = [];

products.push(
  new Product("prd_01", "Zack Snyder's Justice League", "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg", "movie"),
  new Product("prd_02", "The Falcon and the Winter Soldier", "/6kbAMLteGO8yyewYau6bJ683sw7.jpg", "tv_show"),
  new Product("prd_03", "Sky Rojo", "/aqrvHKPWe5VedvvJIz7FWrtcoQh.jpg", "tv_show"),
  new Product("prd_04", "WandaVision", "/glKDfE6btIRcVB5zrjspRIs4r52.jpg", "tv_show"),
  new Product("prd_05", "Cherry", "/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg", "movie"),
  new Product("prd_06", "Soul", "/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg", "movie"),
  new Product("prd_07", "Attack on Titan", "/aiy35Evcofzl7hASZZvsFgltHTX.jpg", "tv_show"),
  new Product("prd_08", "Riverdale", "/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg", "tv_show"),
  new Product("prd_09", "News of the World", "/fYQCgVRsQTEfUrP7cW5iAFVYOlh.jpg", "movie"),
  new Product("prd_10", "SAS: Red Notice", "/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg", "movie"),
  new Product("prd_11", "Happily", "/uCV98jOIxwd0SMICfHFNcuo5CHS.jpg", "movie"),
  new Product("prd_12", "Wonder Woman 1984", "/egg7KFi18TSQc1s24RMmR9i2zO6.jpg", "tv_show"),
);

//Fill showcase
const createProduct = (product) => {
  product = `
    <div class="col-lg-3 col-md-6 col-sm-12 draggable_div"
        id="${product.id_product}"
        draggable="true"
    >
        <img
            src="${product.img_path}"
            class="img-fluid"
            alt="${product.name_product}"
        />
        <div class="bottom-right">
          <i class="fa fa-cart-plus add-prd" aria-hidden="true" value="${product.id_product}"></i>
        </div>
    </div>
`;

  showcase_div.innerHTML += product;
};

for (const key in products) {
  if (products.hasOwnProperty(key)) {
    const element = products[key];
    createProduct(element);
  }
}

//FOCUS ELEMENTS
//FOCUS ELEMENTS
const focusElements = (isFocus, elements) => {
  let elementsToHide = [];
  elements.forEach((element) => {
    elementsToHide.push(document.querySelectorAll(element));
  });

  if (isFocus) {
    elementsToHide.forEach((element) => {
      element[0].classList.add("opac");
      shoppingCart.classList.add("hovered-shopping-cart");
    });
  } else {
    elementsToHide.forEach((element) => {
      element[0].classList.remove("opac");
      shoppingCart.classList.remove("hovered-shopping-cart");
    });
  }
};

//DRAGABLE STUFF
//DRAGABLE STUFF
draggables_div = document.querySelectorAll(".draggable_div");

//DRAGABLES DIV ACTIONS
draggables_div.forEach((draggable_div) => {
  let allExceptShoppingCart = [
    "nav",
    "header",
    "#showcase_div",
    "#menu-categories",
  ];

  draggable_div.addEventListener("dragstart", (ev) => {
    //On dragstart, enable focus and transfer data to drop
    focusElements(true, allExceptShoppingCart);
    ev.dataTransfer.setData(
      "id_prd",
      ev.srcElement.closest([".draggable_div"]).id
    );
  });

  draggable_div.addEventListener("dragend", () => {
    //When dragend dissable focus elements
    focusElements(false, allExceptShoppingCart);
  });
});

document.addEventListener("click", (e) => {
  //Remove product
  let rmv_class = e.target.classList.contains("rmv-prd");
  if (e.target && rmv_class) {
    let prd_id = e.path[0].attributes.value.textContent;
    rmv_prod_from_cart(prd_id);
  }

  //Add product
  let add_class = e.target.classList.contains("add-prd");
  if (e.target && add_class) {
    let prd_id = e.path[0].attributes.value.textContent;
    add_prod_to_cart(new Shop_cart_product(1, prd_id));
  }
});

document.addEventListener("change", (e) => {
  //Add product from input number shopping card
  let add_hour = e.target.classList.contains("add_hour");
  if (e.target && add_hour) {
    let new_hours = e.srcElement.value;
    let prd_id = e.path[0].attributes.id.textContent.replace("nbr_", "");
    update_prod_cart(prd_id, new_hours);
  }
});

//DRAG START
const dragStartf = (elements) => {
  console.log(elements);
};

const dragOver = (ev) => {
  // Dragover - When dragover removes the prohibition symbol. Allows drop.
  ev.preventDefault();
};

//ACTIONS IN SHOPPING CART
shoppingCart.addEventListener("dragover", (ev) => {
  dragOver(ev);
});

shoppingCart.addEventListener("drop", (ev) => {
  // Drop - On drop process add the elemenent to the shopping cart.
  var prd_id = ev.dataTransfer.getData("id_prd");
  add_prod_to_cart(new Shop_cart_product(1, prd_id));
});

//SHOPPING LIST MANAGEMENT
let shopping_cart_arr = [];

function Shop_cart_product(hours, id_product) {
  this.hours = hours;
  this.id_product = id_product;
  return this;
}

const add_prod_to_cart = (shop_cart_product) => {
  let cur_id = shop_cart_product.id_product;
  let product = shopping_cart_arr.find(
    (shop_cart_product) => shop_cart_product.id_product == cur_id
  );
  if (product) {
    product.hours++;
  } else {
    shopping_cart_arr.push(shop_cart_product);
  }

  update_cart();
};

const update_prod_cart = (id_prd, new_hours) => {
  let shop_cart_prd = shopping_cart_arr.find(
    (shop_cart_product) => shop_cart_product.id_product == id_prd
  );

  let i = shopping_cart_arr.indexOf(shop_cart_prd);
  shopping_cart_arr[i].hours = parseInt(new_hours);

  update_cart();
};

const rmv_prod_from_cart = (id_prd) => {
  let product = shopping_cart_arr.find(
    (shop_cart_product) => shop_cart_product.id_product == id_prd
  );
  if (product) {
    let filtered_shpcrt = shopping_cart_arr.filter((prod) => prod !== product);
    shopping_cart_arr = filtered_shpcrt;
  }

  update_cart();
};

const update_cart = () => {
  shoppingList.innerHTML = "";
  let totalHours = 0;
  //Default shopping cart when it's empty
  if (shopping_cart_arr.length <= 0) {
    shoppingList.innerHTML += `
    <div class="container text-center">
      <p>
        <br />
        Todavía no tienes horas de disfrute!!
        <br />
        Arrastra elementos aquí para empezar a alquilar.
      </p>
    </div>
    `;
  } else {
    //Fill shopping cart with products
    shopping_cart_arr.forEach((shop_cart_product) => {
      totalHours += shop_cart_product.hours;
      let product = products.find(
        (products) => products.id_product == shop_cart_product.id_product
      );
      let li_prd = `
              <li class="list-group-item">
                  <div class="product-cart">
                      <div class="container">
                      <img
                          src="${product.img_path}"
                          class="img-cart"
                      />
                      </div>
                      <div class="container">
                      ${product.name_product}
                      </div>
                      <div class="container">
                      <input
                          type="number"
                          class="form-control text-center add_hour"
                          value="${shop_cart_product.hours}"
                          min="0"
                          id="nbr_${product.id_product}"
                      />
                      </div>
                      <div class="container">
                      <i
                        class="fa fa-trash rmv-prd"
                        value="${product.id_product}"
                        >
                      </i>
                      </div>
                  </div>
              </li>
          `;
      shoppingList.innerHTML += li_prd;
    });
  }

  document.querySelector("#horas").innerHTML = totalHours;
  showalert("success", '<i class="far fa-check-circle"></i>');
};

function showalert(alerttype, message) {
  $("#alertdiv").remove();
  $("#alert_placeholder").append(`
    <div id="alertdiv" class="alert alert-${alerttype}">
      <a id="suc_al_close" href="#" class="close"></a>
      ${message}
    </div>
  `);
  // $("#alertdiv").hide('fade');
  setTimeout(() => {
    $("#alertdiv").remove();
  }, 700);
}

// add_prod_to_cart(new Shop_cart_product(10, 'prd_01'));

//FILTER
//FILTER
//FILTER

const movies_filter_element = document.querySelector("#movies_filter_element");
const tvshows__filter_element = document.querySelector(
  "#tvshows_filter_element"
);
const games_filter_element = document.querySelector("#games_filter_element");
movies_filter_element.addEventListener("click", () => {
  focusElements(true, ["#tvshows_filter_element", "#games_filter_element"]);
});
tvshows__filter_element.addEventListener("click", () => {
  focusElements(true, ["#movies_filter_element", "#games_filter_element"]);
});
games_filter_element.addEventListener("click", () => {
  focusElements(true, ["#tvshows_filter_element", "#movies_filter_element"]);
});

// ALERT
// ALERT

window.addEventListener("load", () => {});
