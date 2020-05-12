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
  this.img_path = img_path;
  this.type_product = type_product;

  return this;
}

//ARRAY PRODUCTS
let products = [];

let img_01 =
  "https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/60015854_291317965083436_5161664552507429105_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=EDOtFki5k90AX-pWXex&oh=dceae3c23f15061289ca4f0377b072d6&oe=5EE16145";
let img_02 =
  "https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/93600498_661891127921572_2195614470016186486_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=2WBtqKHGAqYAX8TAIew&oh=8a328ecf80d7e689a4fe62ff228e2746&oe=5EE209A5";
let img_03 =
  "https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/92810636_316868852621376_1952515826467965976_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=e9_xj5RUOJoAX96GsfV&oh=1cef106d27d16c340f2c2bbb336d48d5&oe=5EE0C1CA";
let img_04 =
  "https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/37549406_235865020373943_2008541790981849088_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dYR6R18ozh0AX_zmQK1&oh=df87e6aa621ce1e1e766f0cd4030889c&oe=5EDF518A";
let img_05 =
  "https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/79601070_626779418094725_3810288522790536816_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MbXPOA_wKYQAX8cJKhI&oh=4f5905bc2f9236aa05568b6648322976&oe=5EE242E3";
let img_06 =
  "https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/24175224_529439267426316_4039257566105042944_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=XvC2fAQ033oAX9_-C3O&oh=4a57303a7df2f7442d92d12793bcb795&oe=5EE1AFC1";
let img_07 =
  "https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/24327409_522197461506196_363659227459223552_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=zjPMKo_kA2UAX9livNk&oh=6b3eedb4756259285897d01c45bf7c31&oe=5EDEDE74";
let img_08 =
  "https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/13694945_274092369627704_989100721_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=8YdQlkxViKcAX_sVZ14&oh=a9ae2a6a00fd829f9341900528fb8ae7&oe=5EDEF99D";
let img_09 =
  "https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/13277769_890721924371953_19753307_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=INdqFcIONkUAX8HgI-4&oh=4f87b86c96990855a718341e1dcde3ff&oe=5EE1D8DC";
let img_10 =
  "https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/12142194_1522203271420744_2125401475_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=UEVInk5mR1cAX8UGPtW&oh=5b3a9c6c37698930ff13a219cb440c30&oe=5EDED090";

products.push(
  new Product("prd_01", "Jocker", img_01, "movie"),
  new Product("prd_02", "GTA", img_02, "v_game"),
  new Product("prd_03", "Doom", img_03, "v_game"),
  new Product("prd_04", "The handmaid's tale", img_04, "tv_show"),
  new Product("prd_05", "The rise of Skywalker", img_05, "movie"),
  new Product("prd_06", "Dark", img_06, "tv_show"),
  new Product("prd_07", "Looper", img_07, "movie"),
  new Product("prd_08", "Strangers things", img_08, "tv_show"),
  new Product("prd_09", "Ready player one", img_09, "movie"),
  new Product("prd_10", "The revenant", img_10, "movie")
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

document.addEventListener('click', (e) => {
  //Remove product
  let rmv_class = e.target.classList.contains('rmv-prd');
  if(e.target && rmv_class){
    let prd_id = e.path[0].attributes.value.textContent;
    rmv_prod_from_cart(prd_id);
  }
  
  //Add product
  let add_class = e.target.classList.contains('add-prd');
  if(e.target && add_class){
    let prd_id = e.path[0].attributes.value.textContent;
    add_prod_to_cart(new Shop_cart_product(1, prd_id));
  }
});

document.addEventListener("change", (e) => {
  //Add product from input number shopping card
  let add_hour = e.target.classList.contains('add_hour');
  if(e.target && add_hour){
    let new_hours = e.srcElement.value;
    let prd_id = e.path[0].attributes.id.textContent.replace('nbr_', '');
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
    shop_cart_product => shop_cart_product.id_product == id_prd
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
    let filtered_shpcrt = shopping_cart_arr.filter(prod => prod !== product)
    shopping_cart_arr = filtered_shpcrt;
  }

  update_cart();
};

const update_cart = () => {
  shoppingList.innerHTML = "";
  let totalHours = 0;
  //Default shopping cart when it's empty
  if(shopping_cart_arr.length <= 0){
    shoppingList.innerHTML += `
    <div class="container">
      <p>
        ¡Todavía no tienes horas de disfrute!<br />
        Arrastra elementos aquí para empezar a alquilar.
      </p>
    </div>
    `;
  }
  else{
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
};

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

// FILTER

// window.addEventListener('load', function() {
//     let prd_01 = document.querySelector('#prd_01');
//     prd_01.style.display = "none";
// })
