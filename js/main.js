"use strict";

const movies_filter_element = document.querySelector('#movies_filter_element');
const tvshows__filter_element = document.querySelector('#tvshows_filter_element');
const games_filter_element = document.querySelector('#games_filter_element');
const shoppingCart = document.querySelector('.shopping-cart');
const draggables_div = document.querySelectorAll('.draggable_div');
const showcase_div = document.querySelector('#showcase_div');

const dragStartf = () => {
    focusSC(true);
}

const dragEndf = () => {
    focusSC(false);
}

movies_filter_element.addEventListener("click", () => { console.log("Moovies"); });
tvshows__filter_element.addEventListener("click", () => { console.log("tvshows"); });
games_filter_element.addEventListener("click", () => { console.log("games"); });

shoppingCart.addEventListener("click", () => {
    console.log("shoping c");
});

shoppingCart.addEventListener("dragover", ev => {
    dragOver(ev);
});

draggables_div.forEach( (dragableDiv) => {
    //Drag starts. When begin the dragg
        dragableDiv.addEventListener("dragstart", dragStartf);
    //Drag end.
        dragableDiv.addEventListener("dragend", dragEndf);
    }
);


const focusSC = (isFocus) => {
    let allExcepSc = document.querySelectorAll('nav, header, .draggable-div, .menu-categories');
    if (isFocus) {
        allExcepSc.forEach( (currentValue) => { 
            currentValue.classList.add('opac');
            shoppingCart.classList.add('hovered-shopping-cart');
        });
    } else {
        allExcepSc.forEach( (currentValue) => { 
            currentValue.classList.remove('opac');
            shoppingCart.classList.remove('hovered-shopping-cart');
        });
        
    }
}

const dragOver = (ev) => {
    ev.preventDefault();
    console.log('over');
}

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

let img_01 = 'https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/60015854_291317965083436_5161664552507429105_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=EDOtFki5k90AX-pWXex&oh=dceae3c23f15061289ca4f0377b072d6&oe=5EE16145';
let img_02 = 'https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/93600498_661891127921572_2195614470016186486_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=2WBtqKHGAqYAX8TAIew&oh=8a328ecf80d7e689a4fe62ff228e2746&oe=5EE209A5';
let img_03 = 'https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/92810636_316868852621376_1952515826467965976_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=e9_xj5RUOJoAX96GsfV&oh=1cef106d27d16c340f2c2bbb336d48d5&oe=5EE0C1CA';
let img_04 = 'https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/37549406_235865020373943_2008541790981849088_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dYR6R18ozh0AX_zmQK1&oh=df87e6aa621ce1e1e766f0cd4030889c&oe=5EDF518A';
let img_05 = 'https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/79601070_626779418094725_3810288522790536816_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MbXPOA_wKYQAX8cJKhI&oh=4f5905bc2f9236aa05568b6648322976&oe=5EE242E3';
let img_06 = 'https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/24175224_529439267426316_4039257566105042944_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=XvC2fAQ033oAX9_-C3O&oh=4a57303a7df2f7442d92d12793bcb795&oe=5EE1AFC1';
let img_07 = 'https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/24327409_522197461506196_363659227459223552_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=zjPMKo_kA2UAX9livNk&oh=6b3eedb4756259285897d01c45bf7c31&oe=5EDEDE74';
let img_08 = 'https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/13694945_274092369627704_989100721_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=8YdQlkxViKcAX_sVZ14&oh=a9ae2a6a00fd829f9341900528fb8ae7&oe=5EDEF99D';
let img_09 = 'https://instagram.fbcn5-2.fna.fbcdn.net/v/t51.2885-15/e35/13277769_890721924371953_19753307_n.jpg?_nc_ht=instagram.fbcn5-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=INdqFcIONkUAX8HgI-4&oh=4f87b86c96990855a718341e1dcde3ff&oe=5EE1D8DC';
let img_10 = 'https://instagram.fbcn5-1.fna.fbcdn.net/v/t51.2885-15/e35/12142194_1522203271420744_2125401475_n.jpg?_nc_ht=instagram.fbcn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=UEVInk5mR1cAX8UGPtW&oh=5b3a9c6c37698930ff13a219cb440c30&oe=5EDED090';


products.push(
    new Product('01', 'Jocker', img_01, 'movie'),
    new Product('02', 'GTA', img_02, 'v_game'),
    new Product('03', 'Doom', img_03, 'v_game'),
    new Product('04', 'The handmanid\'s tale', img_04, 'tv_show'),
    new Product('05', 'The rise of Skywalker', img_05, 'movie'),
    new Product('06', 'Dark', img_06, 'tv_show'),
    new Product('07', 'Looper', img_07, 'movie'),
    new Product('08', 'Strangers things', img_08, 'tv_show'),
    new Product('09', 'Ready player one', img_09, 'movie'),
    new Product('10', 'The revenant', img_10, 'movie')
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
    </div>`

    showcase_div.innerHTML += product;
};

for (const key in products) {
    if (products.hasOwnProperty(key)) {
        const element = products[key];
        createProduct(element);
        
    }
}